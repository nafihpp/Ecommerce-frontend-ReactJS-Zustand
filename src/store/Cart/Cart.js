import create from "zustand";

export const useCart = create((set) => ({
    CartItems: [],
    addToCart: (page) =>
        set((state) => [...state.CartItems, { CartItems: page }]),
}));
