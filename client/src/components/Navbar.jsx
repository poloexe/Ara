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
  );
};

export default Navbar;
