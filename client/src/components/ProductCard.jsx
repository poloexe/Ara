import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, price, image }) => {
  return (
    <Link to={`/shop/${id}`} className="flex flex-col gap-4 cursor-pointer group">
      <div className="relative w-full overflow-hidden aspect-[3/4] bg-surface-container">
        <img
          alt={name}
          className="object-cover w-full h-full transition-transform duration-700 grayscale contrast-125 mix-blend-multiply group-hover:scale-105"
          src={image}
        />
      </div>
      <div className="flex items-start justify-between font-label-caps text-label-caps text-primary">
        <h3>{name}</h3>
        <span>{price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;