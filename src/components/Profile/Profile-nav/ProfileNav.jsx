import React from 'react';

const ProfileNav = () => {
  return (
    <>
      <ul className="profile-nav list-unstyled d-flex align-items-start justify-content-between p-0 px-4 border-bottom pb-2 m-0">
        <li className="profile-nav-item">
          Tweets
        </li> 

        <li className="profile-nav-item">
          Tweets & replies
        </li>

        <li className="profile-nav-item">
          Media
        </li>
        
        <li className="profile-nav-item">
          Likes
        </li>
        
      </ul>
    </>
  );
};

export default ProfileNav;