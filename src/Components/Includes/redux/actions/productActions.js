import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProdcuts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product,
    };
};
