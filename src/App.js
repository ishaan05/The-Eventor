import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Pricing from './components/Pricing';
// import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Login from './components/pages/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/pages/Footer.js/Footer';
import CardDescription from './components/CardDescription';
import Scrolltotop from './components/Scrolltotop';
import LoginWrp from './components/wrapper/LoginWrp';
import LogoutWrp from "./components/wrapper/LogoutWrp";
import EventCalendar from './components/EventCalendar';

function App() {
  return (
    
    <Router>
      <Route path='/main' component={Home} />
      <Switch>
      <Route exact path='/create-event' component={EventCalendar} />
      <Route path="/" exact>
          <LoginWrp />
        </Route>
        {/* <Navbar /> */}
      <Scrolltotop>
        <Route path="/logout" exact>
          <LogoutWrp />
        </Route>
        <Route path='/pricing' component={Pricing} />
        <Route exact path='/description' component={CardDescription}/>
        {/* <Route path='/products' component={Products} /> */}
        <Route path='/sign-up' component={SignUp} /> 
        <Route path='/login' component={Login} /> 
        </Scrolltotop>
        {/* <Footer /> */}
      </Switch>
    </Router>
  );
}

export default App;