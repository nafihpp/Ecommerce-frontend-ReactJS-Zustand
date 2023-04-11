import create from "zustand";

export const useCart = create((set) => ({
    cart: [],
    addToCart: (page) =>
        set((state) => {
            const isPresent = state.cart.find(
                (itemsInCart) => itemsInCart.id === page.id
            );
            if (!isPresent) {
                return {
                    cart: [...state.cart, page],
                };
            }
            const updatedCart = state.cart.map((item) =>
                item.id === page.id
                    ? { ...item, quantity: item.quantity + page.quantity }
                    : item
            );
            return {
                ...state,
                cart: updatedCart,
            };
        }),

    updateFromCart: (car) =>
        set((state) => {
            const isPresent = state.cart.find(
                (itemsIncart) => itemsIncart.id === car.id
            );
            if (isPresent) {
                const updatedCart = state.cart.map((ca) =>
                    ca.id === car.id ? { ...ca, quantity: car.quantity } : ca
                );
                return {
                    ...state,
                    cart: updatedCart,
                };
            }
            return state; // return the unmodified state if the item is not present in the cart
        }),

    removeFromCart: (productId) =>
        set((state) => {
            const updatedCart = state.cart.filter(
                (product) => product.id !== productId.id
            );
            return { ...state, cart: updatedCart };
        }),
}));
