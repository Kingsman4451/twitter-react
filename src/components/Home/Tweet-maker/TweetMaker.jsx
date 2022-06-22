import React from "react";
import {NavLink} from "react-router-dom";
import "./Tweet_maker.css";
import ProfileImg from "../../../assets/img/profile-img.jpg";

const TweetMaker = () => {
  return (
    <>
      <div className="tweet-maker py-2 px-3 border-bottom">
        <div className="tweet-maker-top d-flex align-items-start justify-content-start">
          <NavLink to="/profile" className="tweet-maker-profile-link">
            <img
              src={ProfileImg}
              alt="img of bobur"
              className="tweet-maker-main-img rounded-circle"
              width="60"
              height="60"
            ></img>
          </NavLink>
          <label for="tweet">
            <textarea
              className="tweet-maker-textarea ps-2 pt-3 pb-2 d-block"
              name="tweet"
              id="tweet"
              cols="30"
              rows="10"
              placeholder="What’s happening"
            ></textarea>
          </label>
        </div>
        <div className="tweet-maker-botom d-flex align-items-center justify-content-between">
          <ul className="tweet-maker-list list-unstyled p-0 d-flex align-items-center justify-content-between m-0 ms-5 gap-3">
            <li className="tweet-maker-item">
              <i class="bi bi-image"></i>
            </li>

            <li className="tweet-maker-item">
              <i class="bi bi-filetype-gif"></i>
            </li>

            <li className="tweet-maker-item">
              <i class="bi bi-bar-chart-line chart"></i>
            </li>

            <li className="tweet-maker-item">
              <i class="bi bi-emoji-smile"></i>
            </li>

            <li className="tweet-maker-item">
              <i class="bi bi-calendar"></i>
            </li>
          </ul>
          <button className="tweet-maker-btn btn btn-primary rounded-pill px-3">Tweet</button>
        </div>
      </div>
    </>
  );
};

export default TweetMaker;
