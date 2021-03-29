import React from "react";
import images from "../imageData";
import "./Categories.css";

const Categories = () => {
  return (
    <div>
      <div className="catagories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src={images.chair} />
            </div>
            <div className="col-3">
              <img src={images.eiffelTower} />
            </div>
            <div className="col-3">
              <img src={images.shoe} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
