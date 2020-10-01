import React from 'react';
import './App.css';
import Homepage from './components/home/homePage';
import Loginpage from './components/login/loginPage';
import Dashboard from './components/dashboard/dashboard';
import Datapage from './components/data/data';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Homepage} exact/>
          <Route path="/login" component={Loginpage}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/data" component={Datapage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
