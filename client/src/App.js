import React from 'react'; 
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'; 
import NavBar from './components/views/NavBar/NavBar'; 
import LandingPage from './components/views/LandingPage/LandingPage'; 
import LoginPage from './components/views/LoginPage/LoginPage'; 
import RegisterPage from './components/views/RegisterPage/RegisterPage'; 

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage /> 
            </Route>
          </Switch>
      </div>
    </Router>
  );
}



export default App;
