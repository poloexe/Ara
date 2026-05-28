import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  // random cart lol..anyways
  const cartItems = [
    {
      id: 1,
      name: "SCULPTURAL TUNIC",
      color: "OBSIDIAN",
      size: "M",
      price: 450,
      quantity: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2VBy5bsgGGaCmpuAB7JTD8dWs-z96PLXCM-Zd4uUZw17P1tsAa76-Hu8dfXSwXSnUO-A4Fx0Q2iYMgIIqRQT74Lhe6b97YaMmK1nLHGsombDrmSr4ki_HYXPx6JkEQV4rntfNxP46Kt7p4z8JyUTBnG4VbjMgjU-4YxVemF2nKKChWiyHsKuhoTcCGL8YMZiYaQLFyncJx0044BwJR_T3Xo-_tlUVS-AGzxC9te24NMG8S2b8otgmfO27fq8O1u1W5YEcOMFPBlE",
    },
    {
      id: 2,
      name: "GEOMETRIC WEAVE TROUSER",
      color: "CHALK",
      size: "32",
      price: 320,
      quantity: 2,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRGilYQ5JDJT98Iv_weiec9yQWUy3k7cJxbkfJSI6i83pD2HoJ3LhULwEpsDDGMsBzVsVbeejwPTW9gAvXWEcEjjkF4MvcxrffNS8vJ6xA_9wpkvXFg3iEqon5RADM2BMnORAXIKGiAcSVA-3pcPA8GYz5JgXNVILKYCXlKDkQb7jStU0_Jx0hWQkit7l6hzDXmVwXjzWi8SSJIZ024VZHMCm_5WpZB8dq-D9Ek3LePNh4fyZ6F7BZJBnKuynPepeuco_L-1btiZw",
    },
  ];

  // Quick helper to calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <main className="flex-grow flex flex-col px-margin-mobile md:px-margin-desktop py-section-gap w-full max-w-[1600px] mx-auto">
      <header className="mb-16 md:mb-32 flex justify-between items-end">
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary uppercase">
          BAG [{cartItems.length}]
        </h1>
        <Link
          to="/shop"
          className="font-label-caps text-label-caps text-secondary underline hover:text-primary transition-colors mb-2 md:mb-4"
        >
          CONTINUE SHOPPING
        </Link>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 xl:gap-x-32 gap-y-16 items-start">
        {/* Cart Items List (Left Column) */}
        <div className="lg:col-span-8 flex flex-col w-full border-t border-primary">
          {cartItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col sm:flex-row py-8 border-b border-primary gap-8 items-start relative group"
            >
              <div className="w-full sm:w-32 aspect-[3/4] bg-surface-container flex-shrink-0 relative overflow-hidden">
                <img
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                  src={item.image}
                />
              </div>

              <div className="flex flex-col flex-grow justify-between h-full min-h-[128px] w-full">
                <div className="flex justify-between items-start w-full">
                  <div>
                    <h2 className="font-headline-md-mobile text-headline-md-mobile md:font-headline-md md:text-headline-md text-primary uppercase leading-none mb-2">
                      {item.name}
                    </h2>
                    <p className="font-label-caps text-label-caps text-secondary mb-1">
                      COLOR: {item.color}
                    </p>
                    <p className="font-label-caps text-label-caps text-secondary">
                      SIZE: {item.size}
                    </p>
                  </div>
                  <button className="text-secondary hover:text-primary transition-colors hidden sm:block">
                    <span className="material-symbols-outlined text-[20px]">
                      close
                    </span>
                  </button>
                </div>

                <div className="flex justify-between items-end w-full mt-8 sm:mt-0">
                  {/* Quantity Control */}
                  <div className="flex items-center border border-primary h-8">
                    <button
                      aria-label="Decrease quantity"
                      className="w-8 h-full flex items-center justify-center border-r border-primary hover:bg-primary hover:text-on-primary transition-colors text-primary font-nav-link text-nav-link leading-none cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-12 h-full flex items-center justify-center font-nav-link text-nav-link text-primary leading-none">
                      {item.quantity}
                    </span>
                    <button
                      aria-label="Increase quantity"
                      className="w-8 h-full flex items-center justify-center border-l border-primary hover:bg-primary hover:text-on-primary transition-colors text-primary font-nav-link text-nav-link leading-none cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-nav-link text-nav-link text-primary uppercase">
                    USD ${item.price * item.quantity}
                  </p>
                </div>

                {/* Mobile Remove */}
                <button className="font-label-caps text-label-caps text-secondary underline mt-4 sm:hidden self-start">
                  REMOVE
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Order Summary (Right Column) */}
        <aside className="lg:col-span-4 w-full lg:sticky lg:top-[120px] pt-8 lg:pt-0">
          <div className="border-t border-primary pt-8 flex flex-col gap-6">
            <h3 className="font-headline-md-mobile text-headline-md-mobile text-primary uppercase">
              SUMMARY
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center w-full">
                <span className="font-nav-link text-nav-link text-primary uppercase">
                  SUBTOTAL
                </span>
                <span className="font-nav-link text-nav-link text-primary">
                  USD ${subtotal}
                </span>
              </div>
              <div className="flex justify-between items-center w-full">
                <span className="font-nav-link text-nav-link text-secondary uppercase">
                  SHIPPING
                </span>
                <span className="font-nav-link text-nav-link text-secondary uppercase text-right">
                  CALCULATED AT CHECKOUT
                </span>
              </div>
            </div>

            <div className="border-t border-primary pt-4 mt-2 flex justify-between items-center w-full">
              <span className="font-headline-md-mobile text-headline-md-mobile text-primary uppercase">
                TOTAL
              </span>
              <span className="font-headline-md-mobile text-headline-md-mobile text-primary">
                USD ${subtotal}
              </span>
            </div>

            <button className="w-full bg-primary text-on-primary font-label-caps text-label-caps py-4 mt-8 uppercase border border-primary hover:bg-background hover:text-primary transition-colors duration-300 rounded-none cursor-pointer tracking-widest">
              PROCEED TO CHECKOUT
            </button>
            <p className="font-label-caps text-label-caps text-secondary text-center mt-4">
              COMPLIMENTARY GLOBAL SHIPPING ON ORDERS OVER $500
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
