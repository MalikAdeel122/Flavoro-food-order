import React from "react";
import Navbar from "../Components/Navbar";
import Category from "../Components/Category";
import FoodItem from "../Components/FoodItem";
import Card from "../Components/Card";

const Home = () => {
  return (
    <>
      <Navbar />
      <Category />
      <FoodItem />
      <Card />
    </>
  );
};

export default Home;
