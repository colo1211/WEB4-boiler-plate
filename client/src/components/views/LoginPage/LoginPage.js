import React, { useState } from 'react'
import { useDispatch } from 'react-redux'; 
import { loginUser } from '../../../_actions/user_action';
import { useHistory } from "react-router-dom";

function LoginPage(props) {

    const history = useHistory(); 
    const dispatch = useDispatch(); 

    const [Email, setEmail] = useState(''); 
    const [Password, setPassword] = useState(''); 


    const onEmailHandler = (event) => {
        setEmail(event.target.value); 
    }

    const onPasswordHandler = (event) => {
        setPassword(event.target.value); 
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault(); // 제출을 막아준다. 컨트롤의 주체는 나다. 

        // 제출을 눌렀을 때, refresh를 막고 내가 해야할 일을 아래 코드에 적어준다. 
        // console.log('Email', Email);
        // console.log('PW', Password);

        let body = {
            email : Email, 
            password : Password
        }; 

        // Redux를 사용
        // dispatch ({ type : '~~' , payload : { key : 'value' }})
        // loginUser는 { type : '~~' , payload : { key : 'value' }} 와 같은 형태를 리턴해줘야 한다. 
        dispatch(loginUser(body))
        .then(response => {
            // 로그인 성공한다면
            if (response.payload.loginSuccess){
                history.push('/'); 
            }
            // 로그인 실패한다면
            else {
                alert('Error'); 
            }
        })
    }

    return (
        <div style = {{
            display: 'flex' , justifyContent : 'center', alignItems:'center', 
            width : '100%', height : '100vh'
        }}>

            <form style={{ display:'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type='email' value={ Email } onChange={onEmailHandler}></input>

                <label>Password</label>
                <input type='password' value={ Password } onChange={onPasswordHandler}></input>
                <br/>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default LoginPage;
