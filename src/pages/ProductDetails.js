import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Product from "../components/Products/Product";
import { allProducts } from "./Products";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log(id);
    setProduct(allProducts.find((p) => p.id == id));
  }, [id]);

  return (
    <div className="container">
      <Navbar />

      <div className="small-container single-product">
        <div className="row">
          <div className="col-2">
            <div className="DetailsImage">
              <img src={product?.img} />
            </div>
          </div>
          <div className="col-2">
            <p>Home/Ear-Ring</p>
            <h1>{product.name} by CraftVally 3D</h1>
            <h4>${product.price}</h4>
            <input type="number" value="1" />
            <button className="btn">Add To Cart</button>
            <h3>
              Product Details <i className="fa fa-indent"></i>
            </h3>
            <br />
            <p>
              Check out our text earrings selection for the very best in unique
              or custom, Gold Baby Hoop Earrings Fashion Bratz Style Big Hoops{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="small-container">
        <div className="small-container">
          <div className="row row-2">
            <h2>Related Products</h2>
            <Link to="/products">View more</Link>
          </div>
        </div>
        <div className="row">
          {allProducts.slice(0, 4).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
