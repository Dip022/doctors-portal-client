import React from "react";

const CartInfo = ({ img, cartTitle, cartDescription, bgColor }) => {
  return (
    <div class={`card lg:card-side  shadow-xl bg-accent p-5 mb-5 ${bgColor}`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{cartTitle}</h2>
        <p>{cartDescription}</p>
      </div>
    </div>
  );
};

export default CartInfo;
