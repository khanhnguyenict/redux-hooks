import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login';
import User from './User';
import sample from "./context-api/sample";
import AnyComponent from "./context-api/any-component";

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Login} path="/login" exact /> 
        <Route component={User} path="/" exact/> 
        <Route component={sample} path="/context" exact /> 
        <Route component={AnyComponent} path="/any" exact /> 



        {/* <Route component={About} path="/about" />  */}
      </div>
    </Router>
  );
};

export default App;
