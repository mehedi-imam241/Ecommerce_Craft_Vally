import React from "react";
import images from "../imageData";

const Offer = () => {
  return (
    <div className="offer">
      <div className="small-container">
        <div className="row">
          <div className="col-2">
            <img src={images.offerMask} className="offer-img" />
          </div>
          <div className="col-2">
            <p>Exclusively available on Craft Vally 3D</p>
            <h1>Essential Mask-Strap </h1>
            <small>
              You can 3D print your text in a single object, or in a multi-piece
              set. After this step, you will be able to select your 3D printing
              technique, 3D printing materials.
              <br />
            </small>
            <a href="" className="btn">
              Buy Now &#10154;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
