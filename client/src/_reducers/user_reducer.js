import { LOGIN_USER } from "../_actions/types";

// type 에 따라 다른 조치를 취해야 하므로 switch 문으로 작성

// action.payload 에는 node 서버에서 보내온 정보를 담아온다. 

export default function (state = {}, action){
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess : action.payload}
            break;
    
        default:
            return state;
    }
}