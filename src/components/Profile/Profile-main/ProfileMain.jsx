import React from 'react';
import ProfileHeader from '../Profile-header/ProfileHeader';
import ProfileInfo from '../Profile-info/ProfileInfo';
import ProfileNav from '../Profile-nav/ProfileNav';
import ProfileTweets from '../Profile-tweets/ProfileTweets';
import "./ProfileMain.css"

const ProfileMain = () => {
  return (
    <>
      <section className="profile-center col-7 gx-0">
        <ProfileHeader/>
        <ProfileInfo/>
        <ProfileNav/>
        <ProfileTweets/>
      </section>
    </>
  );
};

export default ProfileMain;