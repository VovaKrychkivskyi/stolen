import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Panel from "../panel/Panel"
import './App.css';
import CreateUser from "../work-with-DB/create-user";
import CreateCop from "../work-with-DB/create-cop";
import CopsList from "../work-with-DB/get-all-cops";
import BikeList from "../work-with-DB/get-all-stolen-bikes";
import ProcessList from "../work-with-DB/get-process";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/users' exact>
        </Route>

        <Route path='/process' exact>
        </Route>

        <Route path='/api/cops' exact>
        </Route>

      </Switch>
      <Panel label="HEPL please" isOpenByDefault={false}>
        <CreateUser/>
        This's a place where you can write to police about your bike!
        <br/>
        _____________
        <br/>
        BIKE:
        <BikeList/>
      </Panel>

      <Panel label="Online-process" isOpenByDefault={false}>
        <ProcessList/>
      </Panel>

      <Panel label="Volunteer" isOpenByDefault={false}>
        <CreateCop/>
        If you want to become Volunteer, there's right place!!! go ahead!!!
        <br/>
        _____________
        <br/>
        OFFICERS:
        <CopsList/>
      </Panel>
      <Footer/>
    </Router>
  );
}

export default App;
