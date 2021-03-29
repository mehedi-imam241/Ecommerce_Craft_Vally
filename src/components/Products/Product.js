import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/details/${product.id}`);
  };

  return (
    <div onClick={handleClick} className="col-4">
      <Link className="imageLink" to="/details">
        <img src={product.img} />
      </Link>
      <h4> {product.name}</h4>
      <div className="rating">
        <i className="fa fa-heart"></i>
        <i className="fa fa-heart"></i>
        <i className="fa fa-heart"></i>
        <i className="fa fa-heart"></i>
        <i className="fa fa-heart-o"></i>
      </div>
      <p>${product.price}</p>
    </div>
  );
};

export default Product;
