import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Componentes/assets/css/bootstrap.min.css';
import './Componentes/assets/css/now-ui-kit.css';
import Nav from './Componentes/Nav';
import Banner from "./Componentes/Banner";
import Inicio from "./Paginas/Inicio";
import Doc from "./Paginas/Doc";

function App() {

  return (
      <body className="index-page sidebar-collapse">
      <Router>
        <Nav/>
        <div className="wrapper">
            <Banner />
        </div>
        <br />
        <br />
        <br />
        <br />
            <Switch>
                <Route path="/" exact>
                    <Inicio />
                </Route>
                <Route path="/doc">
                    <Doc/>
                </Route>
            </Switch>
        </Router>
      </body>
  );
}

export default App;
