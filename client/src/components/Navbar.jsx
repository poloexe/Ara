import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-background dark:bg-background full-width top-0 border-b border-outline dark:border-outline-variant flat no shadows transition-all duration-300 ease-in-out flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-gutter max-w-full sticky z-50">
        {/* Mobile Menu Toggle (Placeholder) */}
        <div className="md:hidden flex items-center">
          <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-60 duration-200">
            menu
          </span>
        </div>

        <a
          className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md tracking-tighter text-primary dark:text-primary"
          href="#"
        >
          ARA
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            className="font-nav-link text-nav-link uppercase text-primary border-b border-primary pb-1 hover:opacity-60 duration-200"
            href="#"
          >
            HOME
          </a>
          <a
            className="font-nav-link text-nav-link uppercase text-secondary hover:text-primary transition-colors hover:opacity-60 duration-200"
            href="#"
          >
            SHOP
          </a>
          <a
            className="font-nav-link text-nav-link uppercase text-secondary hover:text-primary transition-colors hover:opacity-60 duration-200"
            href="#"
          >
            ABOUT
          </a>
          <a
            className="font-nav-link text-nav-link uppercase text-secondary hover:text-primary transition-colors hover:opacity-60 duration-200"
            href="#"
          >
            CART
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4">
          <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-60 duration-200">
            shopping_bag
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
