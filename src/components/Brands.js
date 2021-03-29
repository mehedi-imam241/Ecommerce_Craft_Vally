import React from "react";
import images from "../imageData";

const Brands = () => {
  return (
    <div className="brands">
      <div className="small-container">
        <div className="row">
          <div className="col-5">
            <img src={images.nestle} />
          </div>

          <div className="col-5">
            <img src={images.maxix} />
          </div>

          <div className="col-5">
            <img src={images.bkash} />
          </div>

          <div className="col-5">
            <img src={images.nissan} />
          </div>

          <div className="col-5">
            <img src={images.horlics} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
