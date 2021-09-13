import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// CSS 라이브러리 import 
import 'antd/dist/antd.css';

// Redux 라이브러리 import 4개
import { Provider } from 'react-redux'; 
import { applyMiddleware, createStore } from 'redux'; // middleware 연결
import promiseMiddleWare from 'redux-promise'; // redux-store 에 Promise를 보낼 수 있는 middleWare 
import ReduxThunk from 'redux-thunk'; // redux-store 에 Function 을 보낼 수 있는 middleWare

import rootReducer from './_reducers';

// 원래는 createStore 만 하면 되지만, 미들웨어 사용을 위해서 applyMiddleWare 를 적용
const createStoreWithMiddleWare = applyMiddleware(promiseMiddleWare,ReduxThunk)(createStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {createStoreWithMiddleWare(rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && 
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

reportWebVitals();
