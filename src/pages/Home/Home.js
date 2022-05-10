import React from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import Services from "./Services";
import Treatment from "./Treatment ";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Cart></Cart>
      <Services></Services>
      <Treatment></Treatment>
    </div>
  );
};

export default Home;
