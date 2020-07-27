import React from 'react';
import HomeBanner from './homeBanner';
import HomeContent from './homeContent';

// about me

function Home() {
  return (
    <div className="home-wrapper">

      <HomeBanner />
      <div className="bg">
        <div className="container p-4">
          <HomeContent />
        </div>
      </div>
    </div>
  );
}

export default Home;
