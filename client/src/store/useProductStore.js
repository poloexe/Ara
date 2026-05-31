import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useProductStore = create((set) => ({
  isLoading: false,

  createProduct: async (productData) => {
    set({ isLoading: true });

    try {
      const res = await axiosInstance.post("/products", productData);
      toast.success("Product added to vault");
      return true;
    } catch (error) {
      toast.error(error.response?.data?.msg || "Failed to create product");
      return false;
    } finally {
      set({ isLoading: false });
    }
  },
}));
