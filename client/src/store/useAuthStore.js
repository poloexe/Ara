import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isLoggingIn: false,
  isSigningup: false,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/profile");
      console.log(`Checking auth: ${res}`);
      set({ authUser: res.data.user });
    } catch (error) {
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningup: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      console.log(`Checking auth: ${res}`);

      set({ authUser: res.data });
      toast.success("Account Created Successfully! ");
    } catch (error) {
      toast.error(error.response.data.msg || "Ouu that might be us");
    } finally {
      set({ isSigningup: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      console.log(`Checking auth: ${res}`);

      set({ authUser: res.data });
      toast.success("Login Successful! ");
    } catch (error) {
      toast.error(error.response.data.msg || "Ouu that might be us");
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      const res = await axiosInstance.post("/auth/logout");

      set({ authUser: null });
      toast.success("Logged Out Successfully! ");
    } catch (error) {
      toast.error(error.response.data.msg || "Ouu that might be us");
    }
  },
}));
