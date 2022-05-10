import React from "react";
import CartInfo from "./CartInfo";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Cart = () => {
  return (
    <div className=" hero-content  mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <CartInfo
          bgColor="bg-gradient-to-r from-secondary to-primary border-none"
          cartTitle="Opening Hours"
          cartDescription="Lorem Ipsum is simply dummy text of the pri"
          img={clock}
        ></CartInfo>
        <CartInfo
          bgColor="accent"
          cartTitle="Visit our location"
          cartDescription="Brooklyn, NY 10036, United States"
          img={marker}
        ></CartInfo>
        <CartInfo
          bgColor="bg-gradient-to-r from-secondary to-primary border-none"
          cartTitle="Contact us now"
          cartDescription="+000 123 456789"
          img={phone}
        ></CartInfo>
      </div>
    </div>
  );
};

export default Cart;
