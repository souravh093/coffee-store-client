import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { name, quantity, url, taste, category, details, supplier } = coffee;
  return (
    <div className="card card-side bg-base-100 border-2 border-primary">
      <figure>
        <img src={url} alt="Movie" />
      </figure>
      <div className="flex items-center px-10 py-5 justify-between w-full">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Category: {category}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical gap-2">
            <button className="btn">View</button>
            <button className="btn">Edit</button>
            <button className="btn">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
