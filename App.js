import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import './App.css';
import Sidebar from './sidebar';
import Dash from './dashboard';
import Top from './topbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Create from "./create";
import Read from "./read";
import Update from "./update";

import { UserProvider } from "./usercontext";

function App() {

  return (
    <>
      <Router>
        <div id="wrapper">
          <Sidebar></Sidebar>
          <UserProvider>
            <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <Top></Top>
                <div class="container-fluid">
                  <Switch>
                    <Route path="/dashboard" exact="true">
                      <Dash></Dash>
                    </Route>
                    <Route path="/create" exact="true">
                      <Create></Create>
                    </Route>
                    <Route path="/read/:id" component={Read} exact/>
                    <Route path="/update/:id" component={Update} exact/>
                  </Switch>
                </div>
              </div>
            </div>
          </UserProvider>
        </div>
      </Router>
    </>
  );
}

export default App;
