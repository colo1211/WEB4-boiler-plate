import React, { useState } from 'react'
import { useDispatch } from 'react-redux'; 
import { registerUser } from '../../../_actions/user_action';
import {withRouter} from 'react-router-dom'; 

function RegisterPage(props) {

    const dispatch = useDispatch(); 

    const [Email, setEmail] = useState(''); 
    const [Password, setPassword] = useState(''); 
    const [Name, setName] = useState(''); 
    const [ConfirmPassword, setConfirmPassword] = useState(''); 

    const onEmailHandler = (event) => {
        setEmail(event.target.value); 
    }

    const onPasswordHandler = (event) => {
        setPassword(event.target.value); 
    }

    const onNameHandler = (event) => {
        setName(event.target.value); 
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value); 
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault(); // 제출을 막아준다. 컨트롤의 주체는 나다. 

        // 제출을 눌렀을 때, refresh를 막고 내가 해야할 일을 아래 코드에 적어준다. 
        // console.log('Email', Email);
        // console.log('PW', Password);

        if (Password !== ConfirmPassword){
            return alert('비밀번호와 비밀번호 확인이 다름. 재검토 요망!'); 
        }

        else {
            let body = {
                name : Name, 
                email : Email, 
                password : Password,
            }; 

            dispatch(registerUser(body))
            .then((response) => {
                if(response.payload.success){
                    props.history.push('/login'); 
                } else {
                    alert('Failed to Sign Up!');
                }
            })
        }
    }

    return (
        <div style = {{
            display: 'flex' , justifyContent : 'center', alignItems:'center', 
            width : '100%', height : '100vh'
        }}>

            <form style={{ display:'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type='email' value={ Email } onChange={onEmailHandler}></input>
                <br/>

                <label>Name</label>
                <input type='text' value={ Name } onChange={onNameHandler}></input>
                <br/>

                <label>Password</label>
                <input type='password' value={ Password } onChange={onPasswordHandler}></input>
                <br/>

                <label>Confirm Password</label>
                <input type='password' value={ ConfirmPassword } onChange={onConfirmPasswordHandler}></input>
                <br/>

                <button>Submit</button>
                <br/>
            </form>

        </div>
    )
}


export default withRouter(RegisterPage);