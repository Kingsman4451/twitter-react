import React from "react";
import arrow from "../../../assets/img/arrow.png"
import "./Profile_header.css"

const ProfileHeader = () => {
  return (
    <>
      <div class="center__header w-100 position-sticky top-0 d-flex align-items-center justify-content-start py-3 ps-4">
        <a class="center__header-back">
          <img
            src={arrow}
            alt="back arrow"
            width="21"
            height="18"
          ></img>
        </a>
        <div class="center__header-person ms-4">
          <p class="center__header-name fs-5 fw-bold m-0">Bobur</p>
          <p class="center__header-tweets m-0">1,070 Tweets</p>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
