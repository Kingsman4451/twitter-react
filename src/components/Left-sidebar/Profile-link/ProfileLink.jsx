import React from "react";
import {NavLink} from "react-router-dom";
import ProfileImg from "../../../assets/img/profile-img.jpg";
import Dots from "../../../assets/img/dots.png";
import "./ProfileLink.css";

const ProfileLink = () => {
  return (
    <>
      <NavLink to="/profile" className="profile-link position-absolute d-flex justify-content-start align-items-center text-dark text-decoration-none rounded-pill" href={"index.html"}>
        <img className="rounded-circle" src={ProfileImg} width="50" height="50"></img>
        <div className="profile-about ms-2">
          <p className="profile-name m-0">Bobur</p>
          <p className="profile-usrname m-0">@bobur_mavlonov</p>
        </div>
      </NavLink>
    </>
  );
};

export default ProfileLink;
