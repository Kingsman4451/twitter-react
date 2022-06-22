import React, {useContext} from 'react';
import './Tweet.css';
import context from "../../../context";
import UserImfg from "../../../assets/img/profile-img.jpg"

const Tweet = () => {
  const{ profileTweetsInfo } = useContext(context.context)
  return (
    <>
    {profileTweetsInfo.map((item)=>{
      return <li className="tweet-item" key={item.id}>
        <a href="#" className="tweet-item-link text-decoration-none text-dark d-flex w-100 align-items-start justify-content-between px-4 pt-2 pb-3 border-bottom">
          <img className="tweet-item-img rounded-circle" src={UserImfg} width="60" height="60"></img>
          <div className="tweet-content ms-3">
            <p className="tweet-user-name d-inline-block fs-5 fw-bold m-0 mb-1">
              Bobur
            </p>
            <span className="tweet-user-span">@bobur_mavlonov · Apr 1</span>
            <p className="tweet-user-text m-0 mb-3">
              {item.tweet_text}
            </p>

            {item.tweet_img ? <img className="tweet-img d-block w-100 mb-2" src={item.tweet_img} ></img> : ""}

            <ul className="tweet-list list-unstyled d-flex align-items-center justify-content-between">
              <li className="mini-item">
                <i class="bi bi-chat"> </i>
                10
              </li>

              <li className="mini-item">
                <i class="bi bi-arrow-repeat"> </i>
                1
              </li>

              <li className="mini-item">
                <i class="bi bi-heart"> </i>
                8
              </li>

              <li className="mini-item">
                <i class="bi bi-upload"> </i>
                5
              </li>

              <li className="mini-item">
                <i class="bi bi-bar-chart"> </i>
                7
              </li>
            </ul>
          </div>
          <i class="bi bi-three-dots"></i>
        </a>
      </li>
    })}
      
    </>
  );
};

export default Tweet;