import React from 'react';

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
          <div className="container">
              <div className="navbar-translate">
                  <a className="navbar-brand" href="https://demos.creative-tim.com/now-ui-kit/index.html" rel="tooltip"
                     title="Designed by Invision. Coded by Creative Tim" data-placement="bottom"  target="_blank" rel="noopener noreferrer" >
                      Now Ui Kit
                  </a>
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
                          <a className="nav-link" href="javascript:void(0)" onClick="scrollToDownload()">
                              <i className="now-ui-icons arrows-1_cloud-download-93"/>
                              <p>Download</p>
                          </a>
                      </li>
                      <li className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink1"
                             data-toggle="dropdown">
                              <i className="now-ui-icons design_app"/>
                              <p>Components</p>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink1">
                              <a className="dropdown-item" href="./index.html">
                                  <i className="now-ui-icons business_chart-pie-36"/> All components
                              </a>
                              <a className="dropdown-item"  target="_blank" rel="noopener noreferrer" 
                                 href="https://demos.creative-tim.com/now-ui-kit/docs/1.0/getting-started/introduction.html">
                                  <i className="now-ui-icons design_bullet-list-67"/> Documentation
                              </a>
                          </div>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link btn btn-neutral"
                             href="https://www.creative-tim.com/product/now-ui-kit-pro"  target="_blank" rel="noopener noreferrer" >
                              <i className="now-ui-icons arrows-1_share-66"/>
                              <p>Upgrade to PRO</p>
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom"
                             href="https://twitter.com/CreativeTim"  target="_blank" rel="noopener noreferrer" >
                              <i className="fab fa-twitter"/>
                              <p className="d-lg-none d-xl-none">Twitter</p>
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom"
                             href="https://www.facebook.com/CreativeTim"  target="_blank" rel="noopener noreferrer" >
                              <i className="fab fa-facebook-square"/>
                              <p className="d-lg-none d-xl-none">Facebook</p>
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom"
                             href="https://www.instagram.com/CreativeTimOfficial"  target="_blank" rel="noopener noreferrer" >
                              <i className="fab fa-instagram"/>
                              <p className="d-lg-none d-xl-none">Instagram</p>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
}

export default Nav;
