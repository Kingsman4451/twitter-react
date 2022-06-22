import React from 'react';
import HomeHeader from '../Home-header/HomeHeader';
import HomeTweets from '../Home-tweets/HomeTweets';
import TweetMaker from '../Tweet-maker/TweetMaker';

const HomeMain = () => {
  return (
    <>
      <section className="home-page col-7 border-start border-end gx-0">
        <HomeHeader/>
        <TweetMaker/>
        <HomeTweets/>
      </section>
    </>
  );
};

export default HomeMain;