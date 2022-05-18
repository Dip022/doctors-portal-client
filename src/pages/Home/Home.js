import React from "react";
import Appointments from "./Appointments";
import Banner from "./Banner";
import Cart from "./Cart";
import ContactForm from "./ContactForm/ContactForm";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Treatment from "./Treatment ";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Cart></Cart>
      <Services></Services>
      <Treatment></Treatment>
      <Appointments></Appointments>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
