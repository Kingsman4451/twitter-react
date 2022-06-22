import React from 'react';
import {useParams} from "react-router-dom";
import Recomendation from '../Recomendation/Recomendation';
import RightImages from '../Right-images/RightImages';
import Search from '../Search/Search';
import Trends from '../Trends/Trends';
import './RightMain.css';

const RightMain = () => {
  return (
    <>
      <section className="right-sidebar ps-4 col-3">
        <Search/>
        <RightImages/>
        <Recomendation/>
        <Trends/>
      </section>
    </>
  );
};

export default RightMain;