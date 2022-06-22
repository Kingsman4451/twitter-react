import React from "react";
import "./Trends.css";

const Trends = () => {
  return (
    <>
      <div className="right-trends pt-3 bg-light">
        <div className="trends-top d-flex align-items-center justify-content-between mb-3">
          <h4 className="trends-heading ps-3 m-0">Trends for you</h4>
          <a href="#" className="trends-setting pe-3">
            <i className="bi bi-gear text-dark d-inline-block"></i>
          </a>
        </div>
        <ul className="trends-list list-unstyled p-0 m-0">
          <li className="trends-item ">
            <a href="#" className="trend-link text-decoration-none text-dark d-flex align-items-start justify-content-between py-2 px-3">
              <div className="trends-content">
                <p className="trends-text m-0 mb-1">Trending in Germany</p>
                <h5 className="item-heading">Revolution</h5>
                <p className="trends-text">50.4K Tweets</p>
              </div>
              <i class="bi bi-three-dots mt-3"></i>
            </a>
          </li>

          <li className="trends-item ">
            <a href="#" className="trend-link text-decoration-none text-dark d-flex align-items-start justify-content-between py-2 px-3">
              <div className="trends-content">
                <p className="trends-text m-0 mb-1">Trending in Germany</p>
                <h5 className="item-heading">Revolution</h5>
                <p className="trends-text">50.4K Tweets</p>
              </div>
              <i class="bi bi-three-dots mt-3"></i>
            </a>
          </li>

          <li className="trends-item ">
            <a href="#" className="trend-link text-decoration-none text-dark d-flex align-items-start justify-content-between py-2 px-3">
              <div className="trends-content">
                <p className="trends-text m-0 mb-1">Trending in Germany</p>
                <h5 className="item-heading">Revolution</h5>
                <p className="trends-text">50.4K Tweets</p>
              </div>
              <i class="bi bi-three-dots mt-3"></i>
            </a>
          </li>
        </ul>
        <a className="trends-more-link d-inline-block w-100 text-decoration-none pb-3 pt-2 ps-3">Show more</a>
      </div>
    </>
  );
};

export default Trends;
