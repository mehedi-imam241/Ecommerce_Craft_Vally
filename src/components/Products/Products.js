import React from "react";
import Product from "./Product";
import images from "../../imageData";

const featuredProducts = [
  {
    id: 9,
    name: " Metal Ear ring",
    price: 12.0,
    img: images.earring,
  },
  {
    id: 10,
    name: "Lipstick Holder",
    price: 10.0,
    img: images.lipstickHolder,
  },
  {
    id: 11,
    name: "Gold Pendent",
    price: 25.0,
    img: images.goldPendent,
  },
  {
    id: 12,
    name: "Metal Bracelet",
    price: 20.0,
    img: images.metalBracelet,
  },
];

const latestProducts = [
  {
    id: 1,
    name: "3D Pen Holder",
    price: 12.0,
    img: images.penHolder,
  },
  {
    id: 2,
    name: "Phone Holder",
    price: 10.0,
    img: images.phoneHolder,
  },
  {
    id: 3,
    name: " Flower Vase",
    price: 25.0,
    img: images.flowervase,
  },
  {
    id: 4,
    name: "Essential Cables Holder",
    price: 20.0,
    img: images.cablesHolder,
  },
  {
    id: 5,
    name: "Hulk",
    price: 20.0,
    img: images.hulk,
  },
  {
    id: 6,
    name: "Sclupture",
    price: 20.0,
    img: images.sculpture,
  },
  {
    id: 7,
    name: "3D Body Parts",
    price: 20.0,
    img: images.bodyParts,
  },
  {
    id: 8,
    name: "Spider-Man",
    price: 20.0,
    img: images.spiderMan,
  },
];

const Products = () => {
  return (
    <div>
      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          {featuredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>

        <h2 className="title">Latest Product</h2>
        <div className="row">
          {latestProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
