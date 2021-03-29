import React from "react";
import { Link } from "react-router-dom";
import images from "../imageData";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <Navbar />
          <div className="row">
            <div className="col-2">
              <h1>
                Give Your Imagination <br />A New Shape!
              </h1>
              <p>
                Create and customize. Streamline and save. Break down design
                barriers <br /> and scale your business with manufacturing on
                request.
              </p>
              <a href="/" className="btn">
                Check Now &#10154;
              </a>
            </div>

            <div className="col-2">
              <img src={images.mec2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
