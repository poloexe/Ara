import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <main className="flex-grow flex items-center justify-center px-margin-mobile md:px-margin-desktop py-section-gap w-full bg-background relative">
      {/* Subtle Heritage Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 hidden md:flex justify-center items-center z-0">
        <div className="w-[1px] h-full bg-primary absolute left-1/4"></div>
        <div className="w-[1px] h-full bg-primary absolute right-1/4"></div>
      </div>

      <div className="w-full max-w-sm flex flex-col relative z-10">
        <div className="mb-16">
          <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary uppercase">
            Sign In
          </h1>
          <p className="font-body-sm text-body-sm text-secondary mt-2">
            Enter your credentials to access your account.
          </p>
        </div>

        <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="flex flex-col relative focus-within:text-on-surface-variant">
            <label
              className="font-label-caps text-label-caps text-primary uppercase mb-2 transition-colors"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-full bg-transparent px-0 py-3 font-body-lg text-body-lg text-primary placeholder-outline border-0 border-b-2 border-transparent focus:ring-0 focus:outline-none focus:border-primary transition-all duration-200 rounded-none"
              id="email"
              name="email"
              placeholder="name@example.com"
              required
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col relative focus-within:text-on-surface-variant">
            <div className="flex justify-between items-baseline mb-2">
              <label
                className="font-label-caps text-label-caps text-primary uppercase transition-colors"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <input
              className="w-full bg-transparent px-0 py-3 font-body-lg text-body-lg text-primary placeholder-outline border-0 border-b-2 border-transparent focus:ring-0 focus:outline-none focus:border-primary transition-all duration-200 rounded-none"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              type="password"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
            <div className="flex justify-end mt-3">
              <Link
                to="#"
                className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors underline cursor-pointer"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <button
            className="w-full py-5 mt-4 uppercase transition-colors duration-300 cursor-pointer bg-primary text-on-primary font-label-caps text-label-caps hover:bg-surface-tint disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="mt-12 text-center">
          <Link
            to="/signup"
            className="font-label-caps text-label-caps text-primary hover:text-secondary transition-colors underline cursor-pointer uppercase"
          >
            Create an account
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
