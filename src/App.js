import React from 'react';
import './Componentes/assets/css/bootstrap.min.css';
import './Componentes/assets/css/now-ui-kit.css';
import Nav from './Componentes/Nav';
import Banner from "./Componentes/Banner";
import Main from "./Componentes/Main";

function App() {
  return (
      <body className="index-page sidebar-collapse">
        <Nav/>
        <div className="wrapper">
            <Banner />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Main/>
                    </div>
                    <div className="col">
                        <Main/>
                    </div>
                    <div className="col">
                        <Main/>
                    </div>
                 </div>
            </div>
        </div>
      </body>
  );
}

export default App;
