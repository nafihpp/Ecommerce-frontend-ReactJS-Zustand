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

    // removefromCart: (remItem) =>
    //     set((state) => {
    //         const deleting = state.cart.find(
    //             (cartremItem) => cartremItem.id !== remItem.id
    //         );

    //         return {
    //             cart: [...state.cart, deleting],
    //         };
    //     }),
}));
