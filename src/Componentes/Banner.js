import React from 'react';
import logo from './assets/img/now-logo.png'

function Banner() {
    return (
        <div className="page-header clear-filter" filter-color="orange">
            <div className="container">
                <div className="content-center brand">
                    <img className="n-logo" src={logo} alt="" />
                    <h1 className="h1-seo">Now Voto.</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner;