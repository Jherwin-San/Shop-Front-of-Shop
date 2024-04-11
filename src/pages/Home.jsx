import React from "react";
import {
  MainHome,
  NewProducts,
  PopularProducts,
  SecondMain,
} from "../component";

const Home = () => {
  return (
    <div className="overflow-x-hidden min-h-screen bg-nahida-650 dark:bg-shogun-300">
      <MainHome />
      <PopularProducts />
      <SecondMain />
      <NewProducts />
    </div>
  );
};

export default Home;
