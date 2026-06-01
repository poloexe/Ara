import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/useProductStore.js";

const Shop = () => {
  const { products, getProducts, isLoading } = useProductStore();
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const categories = [
    { id: "all", label: "ALL" },
    { id: "outerwear", label: "OUTERWEAR" },
    { id: "tops", label: "TOPS & TUNICS" },
    { id: "bottoms", label: "BOTTOMS" },
    { id: "accessories", label: "ACCESSORIES" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

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
        {/* Dynamic Filter Buttons */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`hover:underline transition-colors whitespace-nowrap ${
                activeCategory === cat.id
                  ? "text-primary underline"
                  : "text-secondary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 transition-opacity hover:opacity-70">
          FILTER{" "}
          <span className="text-[16px] material-symbols-outlined">tune</span>
        </button>
      </div>

      {/* Product Grid */}
      <section className="w-full py-16 px-margin-mobile md:px-margin-desktop md:py-24">
        {isLoading ? (
          <div className="text-center font-body-lg text-secondary">
            Loading Collection...{" "}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center font-body-lg text-secondary">
            No items found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                name={product.name}
                price={`₦ ${product.price.toLocaleString()}`}
                image={product.image}
              />
            ))}
          </div>
        )}
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
