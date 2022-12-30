import create from "zustand";

export const useStore = create((set) => ({
    Allproducts: [],
    loading: true,
    fetchProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products/");
        set({ Allproducts: await res.json(), loading: false });
    },
}));
