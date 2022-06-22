import React from "react";
import "./Profile_info.css";
import ProfileImg from "../../../assets/img/profile-img.jpg";

const ProfileInfo = () => {
  return (
    <>
      <section className="profile-info">
        <div className="profile-bg d-block">
          <img
            className="profile-img rounded-circle d-block position-relative"
            src={ProfileImg}
            alt="img of bobur"
            width="150"
            height="150"
          ></img>
        </div>
        <div className="profile-content w-100 d-flex flex-column align-items-start justify-content-start mt-3 py-4 px-2">
          <button className="profile-btn fs-6" type="button">
            Edit profile
          </button>
          <p class="profile-name fs-4 fw-bold m-0 mt-3">Bobur</p>
          <p class="profile-username m-0 mb-2">@bobur_mavlonov</p>
          <p class="profile-position fs-6 mb-2">
            UX&UI designer at
            <a
              className="profile-link p-1 text-primary text-decoration-none"
              href="https://twitter.com/abutech"
              target="_blank"
              class="center__hero-position--link"
            >
              @abutechuz
            </a>
          </p>
          <ul className="profile-list w-100 d-flex align-items-center justify-content-between flex-wrap list-unstyled p-0 mb-2 gap-2">
            <li className="profile-list-item d-flex align-items-center jutify-content-between">
              <i class="bi bi-geo-alt fs-5 me-1"></i>
              <p className="profile-item-text m-0">Mashag'daman</p>
            </li>
            
            <li className="profile-list-item d-flex align-items-center jutify-content-between">
              <i class="bi bi-link-45deg fs-4 me-1"></i>
              <a className="profile-item-link m-0 text-primary text-decoration-none" href="https://t.me/boburjon_mavlonov">t.me/boburjon_mavlonov</a>
            </li>

            <li className="profile-list-item d-flex align-items-center jutify-content-between">
              <i class="bi bi-balloon fs-5 me-1"></i>
              <p className="profile-item-text m-0">Born November 24, 2000</p>
            </li>

            <li className="profile-list-item d-flex align-items-center jutify-content-between">
              <i class="bi bi-calendar3 fs-5 me-1"></i>
              <p className="profile-item-text m-0">Joined May 2020</p>
            </li>
          </ul>

          <ul className="profile-follow-list d-flex align-items-center list-unstyled p-0">
            <li className="profile-follow-item fw-bold m-0 me-3">
              67 
              <span className="fw-normal"> Following</span>
            </li>

            <li className="profile-follow-item fw-bold m-0 me-3">
              47 
              <span className="fw-normal"> Followers</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProfileInfo;
