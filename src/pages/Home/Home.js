import React from "react";
import Appointment from "./Appointment";
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
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
