import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import { useCartStore } from "../store/useCartStore.js";

const Navbar = () => {
  const { authUser, logout } = useAuthStore();
  const { cart, clearCart, getCart } = useCartStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartItemCount = cart.length;

  useEffect(() => {
    if (authUser) {
      getCart();
    }
  }, [authUser, getCart]);

  const getLinkStyles = ({ isActive }) => {
    const baseStyles =
      "font-nav-link text-nav-link uppercase transition-colors hover:opacity-60 duration-200 pb-1";

    return isActive
      ? `${baseStyles} text-primary border-b border-primary`
      : `${baseStyles} text-secondary hover:text-primary`;
  };

  const handleLogout = () => {
    clearCart();
    logout();
  };

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between w-full transition-all duration-300 ease-in-out border-b max-w-full bg-background dark:bg-background full-width border-outline dark:border-outline-variant flat no shadows px-margin-mobile md:px-margin-desktop py-gutter">
        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <span 
            className="cursor-pointer material-symbols-outlined text-primary hover:opacity-60 duration-200"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            menu
          </span>
        </div>

        <Link
          to="/"
          className="tracking-tighter font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-primary dark:text-primary"
        >
          ARA
        </Link>

        {/* Desktop Links & Action Button */}
        <div className="hidden items-center md:flex gap-8">
          <NavLink to="/" className={getLinkStyles}>
            HOME
          </NavLink>
          <NavLink to="/shop" className={getLinkStyles}>
            SHOP
          </NavLink>
          <NavLink to="/about" className={getLinkStyles}>
            ABOUT
          </NavLink>

          {/* Desktop Cart Link*/}
          <NavLink to="/cart" className={getLinkStyles}>
            CART {cartItemCount > 0 && `[${cartItemCount}]`}
          </NavLink>

          {/* Dynamic Auth Section */}
          {authUser ? (
            <div className="relative flex items-center h-full ml-4 cursor-pointer group">
              <span className="material-symbols-outlined text-primary hover:opacity-60 duration-200">
                person
              </span>
              <div className="absolute right-0 invisible pt-4 transition-all duration-300 opacity-0 top-full group-hover:opacity-100 group-hover:visible z-50">
                <div className="py-4 border shadow-xl bg-background border-primary w-48">
                  <Link
                    to="/account"
                    className="block px-6 py-2 transition-colors font-label-caps text-label-caps text-secondary hover:text-primary hover:bg-surface-container-low"
                  >
                    MY ACCOUNT
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-6 py-2 transition-colors font-label-caps text-label-caps text-secondary hover:text-primary hover:bg-surface-container-low"
                  >
                    ORDER HISTORY
                  </Link>
                  <Link
                    to="/wishlist"
                    className="block px-6 py-2 transition-colors font-label-caps text-label-caps text-secondary hover:text-primary hover:bg-surface-container-low"
                  >
                    WISHLIST
                  </Link>
                  <div className="my-2 border-t border-outline-variant"></div>
                  <button
                    onClick={handleLogout}
                    className="block w-full px-6 py-2 text-left uppercase transition-colors cursor-pointer font-label-caps text-label-caps text-primary hover:bg-surface-container-low"
                  >
                    LOG OUT
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link
              to="/signup"
              className="px-6 py-3 ml-4 tracking-widest uppercase transition-colors duration-300 bg-primary text-on-primary font-label-caps text-label-caps hover:bg-surface hover:text-primary hover:outline hover:outline-1 hover:outline-primary"
            >
              GET STARTED
            </Link>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          {authUser && (
            <Link to="/account">
              <span className="cursor-pointer material-symbols-outlined text-primary hover:opacity-60 duration-200">
                person
              </span>
            </Link>
          )}

          {/* Mobile Top Nav Cart Icon */}
          <Link to="/cart" className="relative flex items-center">
            <span className="cursor-pointer material-symbols-outlined text-primary hover:opacity-60 duration-200">
              shopping_bag
            </span>
            {cartItemCount > 0 && (
              <span className="absolute flex items-center justify-center w-4 h-4 rounded-full -top-1 -right-1 bg-primary text-on-primary text-[9px] font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 z-50 flex items-center justify-between w-full border-t md:hidden bg-background border-outline px-margin-mobile py-gutter">
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

        {/* Mobile Bottom Nav Cart Icon */}
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${isActive ? "text-primary border-t-2 border-primary pt-[2px]" : "text-secondary hover:text-primary"}`
          }
        >
          <div className="relative">
            <span className="material-symbols-outlined text-[20px]">
              shopping_cart
            </span>
            {cartItemCount > 0 && (
              <span className="absolute flex items-center justify-center w-4 h-4 rounded-full -top-1 -right-2 bg-primary text-on-primary text-[9px] font-bold">
                {cartItemCount}
              </span>
            )}
          </div>
          <span className="font-label-caps text-[10px]">CART</span>
        </NavLink>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-[60] flex md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute top-0 left-0 w-64 h-full bg-background border-r border-outline transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } flex flex-col py-gutter px-margin-mobile`}
        >
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="tracking-tighter font-headline-md-mobile text-primary"
            >
              ARA
            </Link>
            <span
              className="cursor-pointer material-symbols-outlined text-primary hover:opacity-60 duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              close
            </span>
          </div>

          <div className="flex flex-col gap-6">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={getLinkStyles}>
              HOME
            </NavLink>
            <NavLink to="/shop" onClick={() => setIsMobileMenuOpen(false)} className={getLinkStyles}>
              SHOP
            </NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={getLinkStyles}>
              ABOUT
            </NavLink>

            <div className="my-2 border-t border-outline-variant"></div>

            {authUser ? (
              <>
                <NavLink to="/account" onClick={() => setIsMobileMenuOpen(false)} className={getLinkStyles}>
                  MY ACCOUNT
                </NavLink>
                <NavLink to="/orders" onClick={() => setIsMobileMenuOpen(false)} className={getLinkStyles}>
                  ORDER HISTORY
                </NavLink>
                <NavLink to="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className={getLinkStyles}>
                  WISHLIST
                </NavLink>
                {authUser?.isAdmin && (
                  <NavLink to="/admin" onClick={() => setIsMobileMenuOpen(false)} className={getLinkStyles}>
                    ADMIN
                  </NavLink>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left font-nav-link text-nav-link uppercase transition-colors hover:opacity-60 duration-200 pb-1 text-secondary hover:text-primary"
                >
                  LOG OUT
                </button>
              </>
            ) : (
              <Link
                to="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center px-6 py-3 tracking-widest uppercase transition-colors duration-300 bg-primary text-on-primary font-label-caps text-label-caps hover:bg-surface hover:text-primary hover:outline hover:outline-1 hover:outline-primary"
              >
                GET STARTED
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
