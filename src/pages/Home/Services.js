import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    { _id: 1, title: "Fluoride Treatment", img: fluoride },
    { _id: 2, title: "Cavity Filling", img: cavity },
    { _id: 3, title: "Teeth Whitening", img: whitening },
  ];
  return (
    <div className="my-32 mb-20 mt-15">
      <h3 className="text-primary text-center">OUR SERVICES</h3>
      <h1 className="text-center text-4xl">Services We Provide</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
