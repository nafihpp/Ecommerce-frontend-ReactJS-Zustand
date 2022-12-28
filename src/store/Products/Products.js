import create from "zustand";

export const useStore = create((set) => ({
    Allproducts: [],
    fetchProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products/");
        set({ Allproducts: await res.json() });
    },
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}));
