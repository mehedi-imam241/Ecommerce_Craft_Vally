import React from "react";
import Brands from "../components/Brands";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Offer from "../components/Offer";
import Products from "../components/Products/Products";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Products />
      <Offer />
      <Testimonial />
      <Brands />
    </div>
  );
};

export default Home;
