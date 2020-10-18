import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
//import Sidebar from "./Components/Sidebar";
import ListClasses from "./Components/ListClasses";
import ClassDetail from "./Components/ClassDetail";
import Signup from "./Components/SignupForm";
import Login from "./Components/LoginForm";
import Logout from "./Components/Logout";


const App = () => (
  <div id="app" className="container-fluid">
    <div className="row">
      <div className="col-2">
       
      </div>
      <div className="content col-10">
        <Switch>
          <Route path="/classes/:classID">
            <ClassDetail />
          </Route>
          <Route path="/classes">
            <ListClasses />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to="/classes" />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
