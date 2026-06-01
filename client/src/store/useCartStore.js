import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useCartStore = create((set) => ({
  cart: [],

  getCart: async () => {
    try {
      const res = await axiosInstance.get("/cart");

      set({ cart: res.data });
    } catch (error) {
      console.error("Failed to fetch cart ", error);
    }
  },

  addToCart: async (productId) => {
    try {
      const res = await axiosInstance.post("/cart", { productId });

      set({ cart: res.data });
      toast.success("Added to cart");
    } catch (error) {
      toast.error(error.response?.data?.msg || "Failed to add Item");
    }
  },
}));
