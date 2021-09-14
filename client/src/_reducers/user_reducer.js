import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from "../_actions/types";

// type 에 따라 다른 조치를 취해야 하므로 switch 문으로 작성

// action.payload 에는 node 서버에서 보내온 정보를 담아온다. 

export default function (state = {}, action){
    switch (action.type) {

        // action.type 이 login_user 라면, 업데이트된 State 리턴
        case LOGIN_USER:
            return {...state, loginSuccess : action.payload}
            break;

        case REGISTER_USER : 
            return {...state, success : action.payload}
            break;

        case AUTH_USER:
            return {...state, userData : action.payload}
            break;
        // userData는 아래와 같은 정보가 담기게 된다.
        //     _id: req.user._id,
        //         isAdmin: req.user.role === 0 ? false : true,
        //     isAuth: true,
        //     email: req.user.email,
        //     name: req.user.name,
        //     lastname: req.user.lastname,
        //     role: req.user.role,
        //     image: req.user.image

  
        // action.type 이 비어있다면, 초기상태의 state를 리턴
        default:
            return state;
    }
}