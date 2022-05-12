import React from "react";

const primaryButton = ({ children }) => {
  return (
    <div>
      <button class="btn bg-primary text-white font-bold bg-gradient-to-r from-secondary to-primary border-none">
        {children}
      </button>
    </div>
  );
};

export default primaryButton;
