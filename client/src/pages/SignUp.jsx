import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main className="flex-grow flex w-full bg-background items-center justify-center py-section-gap px-margin-mobile md:px-margin-desktop relative">
      {/* Subtle Heritage Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 flex justify-center items-center z-0">
        <div className="w-[1px] h-full bg-primary absolute left-1/4"></div>
        <div className="w-[1px] h-full bg-primary absolute right-1/4"></div>
      </div>

      <div className="w-full max-w-md z-10 bg-background relative">
        <div className="mb-16 text-center">
          <h1 className="font-headline-md md:text-headline-md text-headline-md-mobile text-primary uppercase tracking-tight mb-4">
            Create Account
          </h1>
          <p className="font-body-sm text-body-sm text-secondary">
            Join our global community of modern connoisseurs.
          </p>
        </div>

        <form className="flex flex-col gap-8">
          {/* Input: Full Name */}
          <div className="flex flex-col gap-2 relative focus-within:text-on-surface-variant">
            <label
              className="font-label-caps text-label-caps text-primary tracking-widest uppercase transition-colors"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              className="w-full bg-transparent border-0 border-b-2 border-transparent p-0 pb-2 font-body-lg text-body-lg text-primary placeholder-on-surface-variant/40 focus:ring-0 focus:outline-none focus:border-primary transition-all rounded-none"
              id="fullName"
              placeholder="Enter your full name"
              required
              type="text"
            />
          </div>

          {/* Input: Email */}
          <div className="flex flex-col gap-2 relative focus-within:text-on-surface-variant">
            <label
              className="font-label-caps text-label-caps text-primary tracking-widest uppercase transition-colors"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-transparent border-0 border-b-2 border-transparent p-0 pb-2 font-body-lg text-body-lg text-primary placeholder-on-surface-variant/40 focus:ring-0 focus:outline-none focus:border-primary transition-all rounded-none"
              id="email"
              placeholder="Enter your email address"
              required
              type="email"
            />
          </div>

          {/* Input: Password */}
          <div className="flex flex-col gap-2 relative focus-within:text-on-surface-variant">
            <label
              className="font-label-caps text-label-caps text-primary tracking-widest uppercase transition-colors"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full bg-transparent border-0 border-b-2 border-transparent p-0 pb-2 font-body-lg text-body-lg text-primary placeholder-on-surface-variant/40 focus:ring-0 focus:outline-none focus:border-primary transition-all rounded-none"
              id="password"
              placeholder="Create a secure password"
              required
              type="password"
            />
          </div>

          {/* Input: Confirm Password */}
          <div className="flex flex-col gap-2 relative focus-within:text-on-surface-variant">
            <label
              className="font-label-caps text-label-caps text-primary tracking-widest uppercase transition-colors"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="w-full bg-transparent border-0 border-b-2 border-transparent p-0 pb-2 font-body-lg text-body-lg text-primary placeholder-on-surface-variant/40 focus:ring-0 focus:outline-none focus:border-primary transition-all rounded-none"
              id="confirmPassword"
              placeholder="Repeat your password"
              required
              type="password"
            />
          </div>

          {/* Action Button */}
          <div className="mt-8">
            <button
              className="w-full bg-primary text-on-primary border border-primary font-label-caps text-label-caps uppercase py-5 px-8 hover:bg-background hover:text-primary transition-colors duration-300 rounded-none cursor-pointer flex justify-center items-center gap-2"
              type="submit"
            >
              <span>Create Account</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
        </form>

        <div className="mt-12 text-center border-t border-secondary-container pt-8">
          <span className="font-body-sm text-body-sm text-secondary">
            Already have an account?
          </span>
          <Link
            to="/login"
            className="font-label-caps text-label-caps text-primary ml-2 underline hover:text-on-surface-variant transition-colors uppercase"
          >
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
