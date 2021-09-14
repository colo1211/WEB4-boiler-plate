import React from 'react'; 
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'; 
import NavBar from './components/views/NavBar/NavBar'; 
import LandingPage from './components/views/LandingPage/LandingPage'; 
import LoginPage from './components/views/LoginPage/LoginPage'; 
import RegisterPage from './components/views/RegisterPage/RegisterPage'; 
import Auth from './hoc/auth';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
          <Switch>
            {/*(option)*/}
            {/*null : 아무나 출입이 가능한 페이지, Landing Page*/}
            {/*true : 로그인한 유저만 출입이 가능한 페이지*/}
            {/*false : 로그인한 유저 출입 불가 페이지*/}
            <Route exact path="/" component = {Auth(LandingPage,null )}/>
            <Route path="/login" component = {Auth(LoginPage,false )}/>
            <Route path="/register" component = {Auth(RegisterPage, false )}/>
          </Switch>
      </div>
    </Router>
  );
}



export default App;
