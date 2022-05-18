import React from "react";

const Reviews = ({ review }) => {
  return (
    <section>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl py-10">
        <div class="card-body">
          <p>{review.review}</p>
        </div>
        <div className="flex  items-center px-10">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h4>{review.name}</h4>
            <h4>{review.location}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
