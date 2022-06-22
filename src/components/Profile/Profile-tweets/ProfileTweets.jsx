import React from 'react';
import "./Profile_tweets.css"
import context from "../../../context";
import Tweet from '../../UI/Tweet/Tweet';
import TweetImg from "../../../assets/img/profile-big.jpg"

const ProfileTweets = () => {
  const cont=context.context;

  const profileTweetsInfo =[{id:1, tweet_text: "4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim"}, {id:2, tweet_text:`Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. 

  Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. 
  
  Gap faqat biznes trenerlar haqida emas.`}, {id:3, tweet_text:"A bo'pti maskamasman", tweet_img: TweetImg}];

  return (
    <>
      <ul className="profile-tweets list-unstyled p-0">
        <cont.Provider value={{profileTweetsInfo}}>
          <Tweet/>
        </cont.Provider>
      </ul>
    </>
  );
};

export default ProfileTweets;