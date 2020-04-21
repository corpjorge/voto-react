import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import BotonVotar from "./BotonVotar";

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
          <div className="container">
              <div className="navbar-translate">
                  <Link  className="navbar-brand"
                      to="/"
                      title="Designed by Invision. Coded by Creative Tim" data-placement="bottom"  >
                      Now Voto
                  </Link>
                  <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navigation" aria-controls="navigation-index" aria-expanded="false"
                          aria-label="Toggle navigation">
                      <span className="navbar-toggler-bar top-bar"/>
                      <span className="navbar-toggler-bar middle-bar"/>
                      <span className="navbar-toggler-bar bottom-bar"/>
                  </button>
              </div>
              <div className="collapse navbar-collapse justify-content-end" id="navigation"
                   data-nav-image="./assets/img/blurred-image-1.jpg">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <Link  className="navbar-brand" to="doc">
                              <i className="now-ui-icons arrows-1_cloud-download-93"/>
                              <p>Doc</p>
                          </Link>
                      </li>
                      <li className="nav-item">
                          <BotonVotar/>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>

  );
}

export default Nav;
