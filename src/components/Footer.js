import React from "react";
import images from "../imageData";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Ready to get started?</h3>
            <p>
              From product development to industrial <br />
              3D manufacturing, we can help you scale your business.
            </p>
            <div className="social-media-logo" />
            <a target="_blank" href="https://www.facebook.com/">
              <img src={images.fb} />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <img src={images.insta} />
            </a>
            <a target="_blank" href="https://www.twitter.com/">
              <img src={images.twitter} />
            </a>
          </div>
          <div className="footer-col-2">
            <img src={images.footerLogo} />
            <p className="footer-logo-padding">
              Our purpose is to sustainably make the <br />
              pleasure and benefits of 3D printing to the many
            </p>
          </div>

          <div className="footer-col-3">
            <h3>Services</h3>
            <ul>
              <li>3D Design</li>
              <li>3D Printing</li>
              <li>Bussiness</li>
              <li>Market Place</li>
            </ul>
          </div>

          <div className="footer-col-4">
            <h3>Support</h3>
            <ul>
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>3D Materials Guide</li>
              <li>Community Forum</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">&#169;Copyright 2021 - CraftVally 3D</p>
    </div>
  );
};

export default Footer;
