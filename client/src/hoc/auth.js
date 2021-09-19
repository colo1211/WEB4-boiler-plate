// HOC : High Controller Component 
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { authUser } from '../_actions/user_action';

// (option)
// null : 아무나 출입이 가능한 페이지, Landing Page
// true : 로그인한 유저만 출입이 가능한 페이지
// false : 로그인한 유저 출입 불가 페이지

export default function (SpecificComponent, option, adminRoute = null){
    // function 아래에 또다른 AuthCheck Function 을 만든 이유 : props를 전달하여 props.history.push('/')를 쓰기 위해서
    function AuthCheck(props){
        const dispatch = useDispatch();
        // 특정 컴포넌트가 들어오면 Back-End에 접속한 유저의 상태에 대해 request를 보낸다. 
        useEffect(()=>{
            // 페이지가 이동할 때마다, dispatch가 작동해서 back에 request
            dispatch(authUser())
                .then((response) => {
                    // User 상태에 따른 컴포넌트 분기 처리
                    console.log(response); 
                    // 1. 로그인 하지 않은 상태
                    if (response.payload.isAuth === false){
                        // 로그인한 유저만 출입이 가능한 페이지
                        if (option === true){
                            props.history.push('/login');
                        }
                    }
                    // 2. 로그인 한 상태
                    else if (response.payload.isAuth){

                        // 로그인한 사람은 못들어 가는 페이지로 접속 시도
                        if (option === false){
                            props.history.push('/');
                        }
                        // Admin 만 들어갈 수 있는 페이지로 접속 시도
                        else if (adminRoute && response.payload.isAuth === false ){
                            props.history.push('/');
                        }
                    }
                })
        }, [])
        return (
            <SpecificComponent />// 위에서 걸리는게 없다면 최종적으로 원래 파라미터로 들어왔던 SpecificComponent를 리턴해준다.
        )
    }
    return AuthCheck; 
}