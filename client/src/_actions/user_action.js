// reducer 인자에 들어갈 type(action), payload를 리턴해주는 것이 목적  
import axios from 'axios'; 
import { 
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';

// 여기에 dataToSubmit에 body 가 들어감. (dataSubmit : login/password 등의 정보가 Object 형태로 들어감)
export function loginUser(dataToSubmit){
    
    // 서버에서 받은 데이터를 request 로 저장 
    // request = { loginSuccess: true, userId: user._id }

    const request = axios.post('/api/users/login', dataToSubmit) // server로 로그인 한 정보를 전달
    .then(response =>  // 성공하게 되면 서버로부터 응답을 받음
        response.data
    );
    console.log(`request`,request); 

    // dispatch({ 여기에 꽂힐 내용을 리턴 해준다.})
    //  { type : '~~' , payload : { key : 'value' }} 와 같은 형태를 리턴해야함. 
    return {
        type : LOGIN_USER, // type 에 의해서 user_reducer에 꽂힌다.  
        payload : request
    }
}


export function registerUser(dataToSubmit){
    
    // 서버에서 받은 데이터를 request 로 저장 
    // request = { loginSuccess: true, userId: user._id }

    const request = axios.post('/api/users/register', dataToSubmit) // server로 로그인 한 정보를 전달
    .then(response =>  // 성공하게 되면 서버로부터 응답을 받음
        response.data
    );
    // dispatch({ 여기에 꽂힐 내용을 리턴 해준다.})
    //  { type : '~~' , payload : { key : 'value' }} 와 같은 형태를 리턴해야함. 
    return {
        type : REGISTER_USER, // type 에 의해서 user_reducer에 꽂힌다.  
        payload : request
    }
}

export function authUser(dataToSubmit){

    const request = axios.get('/api/users/auth')
        .then((response)=>
           response.data
        );

    return {
        type : AUTH_USER,
        payload : request
    }
}
