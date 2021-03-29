import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Products/Product";
import images from "../imageData";

export const allProducts = [
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

function Products() {
  const [sortType, setSortType] = useState("albums");

  const [data, setData] = useState(allProducts);

  const sortArray = (type) => {
    const types = {
      default: "default",
      price: "price",
    };
    const sortProperty = types[type];
    console.log(sortProperty);
    const sorted = [...allProducts].sort(
      (a, b) => a[sortProperty] - b[sortProperty]
    );
    console.log(type);
    console.log(sorted);
    setData(sorted);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="small-container">
        <div class="row row-2">
          <h2>All Products</h2>
          <select onChange={(e) => sortArray(e.target.value)}>
            <option value="default">Default sorting</option>
            <option value="price">Sort by price</option>
          </select>
        </div>

        <div class="row">
          {data.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
