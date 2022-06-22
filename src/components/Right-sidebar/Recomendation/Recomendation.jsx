import React from 'react';
import RecomendItem from './Recomend-item/RecomendItem';
import "./Recomendation.css";

const Recomendation = () => {
  return (
    <>
      <div className="right-recomendation pt-3 w-100 bg-light mb-3">
        <h4 className="recomendaton-title ps-2 m-0 mb-2">You might like</h4>
        <ul className="recomendation-list list-unstyled p-0 m-0">
          <RecomendItem/>
        </ul>
        <a className="recomendation-more-link d-inline-block w-100 text-decoration-none pb-3 pt-2 ps-3">Show more</a>
      </div>
    </>
  );
};

export default Recomendation;