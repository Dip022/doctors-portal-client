import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ date }) => {
  return (
    <div>
      <h1 className="text-xl text-secondary text-center mb-5">
        Available Appointments on: {format(date, "PP")}
      </h1>
    </div>
  );
};

export default AvailableAppointment;
