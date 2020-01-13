import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login';
import User from './User';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Test</h1> 
        <Route component={Login} path="/login" exact /> 
        <Route component={User} path="/user" /> 

        {/* <Route component={About} path="/about" />  */}
      </div>
    </Router>
  );
};

export default App;
