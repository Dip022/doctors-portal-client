import React from "react";
import treatment from "../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div className="mt-20 mb-20 ">
      <div class="card card-side bg-base-100 grid sm:grid-cols-1 md:grid-cols-2  shadow-xl flex items-center">
        <figure>
          <img src={treatment} alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-5xl">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="text-1xl">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div class="card-actions justify-top">
            <button class="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
