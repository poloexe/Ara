import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const getLinkStyles = ({ isActive }) => {
    const baseStyles =
      "font-nav-link text-nav-link uppercase transition-colors hover:opacity-60 duration-200 pb-1";

    return isActive
      ? `${baseStyles} text-primary border-b border-primary`
      : `${baseStyles} text-secondary hover:text-primary`;
  };

  return (
    <>
      <nav className="bg-background dark:bg-background full-width top-0 border-b border-outline dark:border-outline-variant flat no shadows transition-all duration-300 ease-in-out flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-gutter max-w-full sticky z-50">
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-60 duration-200">
            menu
          </span>
        </div>

        <Link
          to="/"
          className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md tracking-tighter text-primary dark:text-primary"
        >
          ARA
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={getLinkStyles}>
            HOME
          </NavLink>
          <NavLink to="/shop" className={getLinkStyles}>
            SHOP
          </NavLink>
          <NavLink to="/about" className={getLinkStyles}>
            ABOUT
          </NavLink>
          <NavLink to="/cart" className={getLinkStyles}>
            CART
          </NavLink>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4">
          <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-60 duration-200">
            shopping_bag
          </span>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-background border-t border-outline z-50 px-margin-mobile py-gutter flex justify-between items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${isActive ? "text-primary border-t-2 border-primary pt-[2px]" : "text-secondary hover:text-primary"}`
          }
        >
          <span className="material-symbols-outlined text-[20px]">home</span>
          <span className="font-label-caps text-[10px]">HOME</span>
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${isActive ? "text-primary border-t-2 border-primary pt-[2px]" : "text-secondary hover:text-primary"}`
          }
        >
          <span className="material-symbols-outlined text-[20px]">
            shopping_bag
          </span>
          <span className="font-label-caps text-[10px]">SHOP</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${isActive ? "text-primary border-t-2 border-primary pt-[2px]" : "text-secondary hover:text-primary"}`
          }
        >
          <span className="material-symbols-outlined text-[20px]">info</span>
          <span className="font-label-caps text-[10px]">ABOUT</span>
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${isActive ? "text-primary border-t-2 border-primary pt-[2px]" : "text-secondary hover:text-primary"}`
          }
        >
          <span className="material-symbols-outlined text-[20px]">
            shopping_cart
          </span>
          <span className="font-label-caps text-[10px]">CART</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
