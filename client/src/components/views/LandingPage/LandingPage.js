import React, { useEffect } from 'react'
import axios from 'axios'; 
import { useDispatch } from 'react-redux'; 
import { logoutUser } from '../../../_actions/user_action'
import { withRouter } from 'react-router-dom'; 


function LandingPage(props) {

    const dispatch = useDispatch(); 

    // LogOut은 Redux 에 올릴 정보가 없으므로 이벤트리스너를 통해서 server/index.js 내 의 
    // /api/users/logout 과 통신하여 success:true 를 받아오면 로그아웃 되도록 한다. 
    
    const onClickHandler = ()=> {
        axios.get('/api/users/logout')
        .then((response)=>{
            if(response.data.success){
                props.history.push('/login'); 
            }else {
                alert('Sign Out Failed'); 
            }
        })
    }

    useEffect(()=>{
        axios.get('/api/hello')
        .then((response)=>{ 
            //  console.log(response.data);     
        });
        
    },[]); 


    return (
        <div style = {{
            display: 'flex' , justifyContent : 'center', alignItems:'center', 
            width : '100%', height : '100vh'
        }}>
           <h2>시작 페이지</h2>
           <button onClick={ onClickHandler }> Sign Out </button>

        </div>
    )
}

export default withRouter(LandingPage);