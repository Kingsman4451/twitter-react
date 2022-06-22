import React from 'react';
import Img1 from '../../../assets/img/small-img-1.jpg';
import Img2 from '../../../assets/img/small-img-2.jpg';
import Img3 from '../../../assets/img/small-img-3.jpg';
import Img4 from '../../../assets/img/small-img-4.jpg';
import Img5 from '../../../assets/img/small-img-5.jpg';
import Img6 from '../../../assets/img/small-img-6.jpg';




const RightImages = () => {
  return (
    <>
      <ul className="right-images list-unstyled p-0 d-flex flex-wrap gap-1">
        <li className="right-images-item">
          <img className="right-item-img" src={Img1} width="95"></img>
        </li>
        
        <li className="right-images-item">
          <img className="right-item-img" src={Img2} width="95"></img>
        </li>

        <li className="right-images-item">
          <img className="right-item-img" src={Img3} width="95"></img>
        </li>

        <li className="right-images-item">
          <img className="right-item-img" src={Img4} width="95"></img>
        </li>
        
        <li className="right-images-item">
          <img className="right-item-img" src={Img5} width="95"></img>
        </li>

        <li className="right-images-item">
          <img className="right-item-img" src={Img6} width="95"></img>
        </li>
      </ul>
    </>
  );
};

export default RightImages;