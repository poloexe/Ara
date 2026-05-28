const ProductCard = ({ name, price, image }) => {
  return (
    <div className="group cursor-pointer flex flex-col gap-4">
      <div className="w-full aspect-[3/4] bg-surface-container relative overflow-hidden">
        <img
          alt={name}
          className="w-full h-full object-cover mix-blend-multiply grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
          src={image}
        />
      </div>
      <div className="flex justify-between items-start font-label-caps text-label-caps text-primary">
        <h3>{name}</h3>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
