import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { useCartStore } from "../store/useCartStore.js";

const ProductDetails = () => {
  const { id } = useParams();
  const { productDetails, getProductById, products, getProducts, isLoading } =
    useProductStore();

  const { addToCart } = useCartStore();

  const [selectedSize, setSelectedSize] = useState("M");

  useEffect(() => {
    getProductById(id);
    if (products.length === 0) {
      getProducts();
    }
  }, [id, getProductById, products.length, getProducts]);

  if (isLoading || !productDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen text-primary font-body-lg">
        Loading editorial...
      </div>
    );
  }

  // Getting 3 random products
  const suggestedProducts = products.filter((p) => p._id !== id).slice(0, 3);

  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
      {/* Product Hero Section */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-gutter">
        {/* Image Gallery (Left) */}
        {/* Image Gallery (Left) */}
        <div className="flex flex-col md:col-span-7">
          <div className="w-full aspect-[3/4] bg-surface-container-highest relative overflow-hidden group">
            <img
              alt={productDetails.name}
              className="object-cover w-full h-full transition-transform duration-700 grayscale contrast-125 group-hover:scale-105"
              src={productDetails.image}
            />
          </div>
        </div>

        {/* Product Details (Right) */}
        <div className="flex flex-col pt-8 md:col-span-4 md:col-start-9 md:pt-0 sticky top-32 h-fit">
          <h1 className="mb-4 font-bold tracking-tighter uppercase font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-primary">
            {productDetails.name}
          </h1>
          <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
            ₦ {productDetails.price.toLocaleString()}
          </p>

          <div className="w-full border-t mb-8 border-primary border-opacity-20"></div>

          <div className="mb-12 leading-relaxed font-body-sm text-body-sm text-on-surface">
            <p className="mb-4">{productDetails.description}</p>
          </div>

          {/* Size Selection */}
          <div className="mb-12">
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-label-caps text-label-caps text-primary">
                SELECT SIZE
              </span>
              <button className="underline transition-colors font-label-caps text-label-caps text-secondary hover:text-primary">
                SIZE GUIDE
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {["S", "M", "L"].map((size) => (
                <label key={size} className="cursor-pointer">
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value={size}
                    checked={selectedSize === size}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  />
                  <div className="py-3 text-center transition-colors border border-primary font-label-caps text-label-caps text-primary peer-checked:bg-primary peer-checked:text-on-primary hover:bg-surface-container-highest">
                    {size}
                  </div>
                </label>
              ))}
              <label className="cursor-not-allowed opacity-50">
                <input
                  className="sr-only peer"
                  disabled
                  name="size"
                  type="radio"
                  value="XL"
                />
                <div className="py-3 text-center line-through border border-primary font-label-caps text-label-caps text-secondary bg-surface-container-low">
                  XL
                </div>
              </label>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            disabled={!productDetails.inStock}
            className="w-full px-8 py-3 mb-8 text-center transition-colors duration-300 border cursor-pointer border-primary font-label-caps text-label-caps bg-primary text-on-primary hover:bg-surface hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => addToCart(productDetails._id)}
          >
            {productDetails.inStock ? "ADD TO CART" : "OUT OF STOCK"}
          </button>

          {/* Accordion details */}
          <div className="flex flex-col border-t border-primary border-opacity-20">
            <details className="py-6 border-b cursor-pointer group border-primary border-opacity-20">
              <summary className="flex items-center justify-between list-none outline-none font-label-caps text-label-caps text-primary">
                MATERIALS &amp; CARE
                <span className="transition-transform material-symbols-outlined group-open:-rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="pt-4 font-body-sm text-body-sm text-on-surface-variant">
                Premium materials sourced globally. Dry clean only. Do not iron
                directly on the prints.
              </div>
            </details>
            <details className="py-6 border-b cursor-pointer group border-primary border-opacity-20">
              <summary className="flex items-center justify-between list-none outline-none font-label-caps text-label-caps text-primary">
                SHIPPING &amp; RETURNS
                <span className="transition-transform material-symbols-outlined group-open:-rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="pt-4 font-body-sm text-body-sm text-on-surface-variant">
                Complimentary global shipping on orders over ₦200,000. Returns
                accepted within 14 days in unworn condition.
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      {suggestedProducts.length > 0 && (
        <section className="pt-16 mt-section-gap border-t border-primary border-opacity-20">
          <h2 className="mb-12 font-bold tracking-tighter text-center uppercase font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-primary">
            YOU MAY ALSO LIKE
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {suggestedProducts.map((product) => (
              <Link
                to={`/shop/${product._id}`}
                key={product._id}
                className="block cursor-pointer group"
              >
                <div className="w-full aspect-[3/4] bg-surface-container-highest mb-4 overflow-hidden">
                  <img
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-700 grayscale contrast-125 group-hover:scale-105"
                    src={product.image}
                  />
                </div>
                <div className="flex items-baseline justify-between font-label-caps text-label-caps">
                  <span className="text-primary">{product.name}</span>
                  <span className="text-secondary">
                    ₦ {product.price.toLocaleString()}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetails;
