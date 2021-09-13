// 여기가 다양한 reducer를 합쳐주는 rootReducer By. combineReducer({ reducer1, reducer2 })

import { combineReducers } from "redux";
import user from './user_reducer'; 
// import commnet from './comment_reducer';

const rootReducer = combineReducers({
    user
});  

export default rootReducer; 