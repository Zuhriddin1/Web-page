import React from "react";

function Card(props) {
  const { image, title, price } = props.data;
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center align-middle  mt-16">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="cursor-pointer rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title cursor-pointer">{title}</h2>
          <p className="text-purple-500 cursor-pointer">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
