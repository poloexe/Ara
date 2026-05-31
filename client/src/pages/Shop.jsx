import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/useProductStore.js";

const Shop = () => {
  const { products, getProducts, isLoading } = useProductStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <main className="w-full flex-grow">
      {/* Page Header */}
      <section className="flex flex-col w-full gap-4 pb-8 pt-16 border-b px-margin-mobile md:px-margin-desktop md:pt-32 md:pb-16 border-primary">
        <h1 className="uppercase font-display-lg-mobile md:font-display-lg text-primary">
          Collection 01
        </h1>
        <p className="max-w-2xl font-body-lg text-on-surface-variant">
          A study in form and negative space. Drawing inspiration from
          traditional weaving techniques, translated into architectural
          silhouettes for the modern global uniform.
        </p>
      </section>

      {/* Filter Bar */}
      <div className="flex items-center justify-between w-full py-4 border-b px-margin-mobile md:px-margin-desktop border-primary font-label-caps text-label-caps">
        <div className="flex gap-6">
          <button className="underline hover:underline text-primary">
            ALL
          </button>
          <button className="hover:underline text-secondary">OUTERWEAR</button>
          <button className="hover:underline text-secondary">SHIRTS</button>
          <button className="hover:underline text-secondary">TROUSERS</button>
        </div>
        <button className="flex items-center gap-2 transition-opacity hover:opacity-70">
          FILTER{" "}
          <span className="text-[16px] material-symbols-outlined">tune</span>
        </button>
      </div>

      {/* Product Grid */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              price={`₦ ${product.price.toLocaleString()}`}
              image={product.image}
            />
          ))}
        </div>
      </section>

      {/* Load More */}
      {products.length > 0 && (
        <div className="flex justify-center w-full pb-section-gap px-margin-mobile md:px-margin-desktop">
          <button className="px-8 py-4 transition-colors border cursor-pointer bg-primary text-on-primary font-label-caps text-label-caps hover:bg-surface hover:text-primary border-primary">
            LOAD MORE
          </button>
        </div>
      )}
    </main>
  );
};

export default Shop;
