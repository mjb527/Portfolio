import React from 'react';
import './home.css';

function HomeBanner() {

  return (
    <div className="banner d-flex justify-content-center align-items-center">
      <img src="static/imgs/home-banner.png" alt="" id="codingImg" className="img-fluid w-100 p-relative img-transparent"/>
      <div className="text-block rounded text-center p-2">
        <h2>Hi, my name is Matt. I'm a full stack developer.</h2>
      </div>
    </div>
  );
}

export default HomeBanner;
