import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [], // Product data
    cart: [], // Cart items
    totalItems: 0, // Total count of items in the cart
    totalPrice: 0, // Total price of items in the cart
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cart.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...newItem, quantity: 1 });
            }
            state.totalItems += 1;

            // Calculate the new total price
            state.totalPrice = state.cart.reduce((total, item) => {
                const price = parseFloat(item.price2.replace("$", "")); // Convert price1 to a number
                return total + price * item.quantity;
            }, 0);
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.cart.find(item => item.id === id);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.cart = state.cart.filter(item => item.id !== id);
                } else {
                    existingItem.quantity -= 1;
                }
                state.totalItems -= 1;
            }

            // Recalculate the total price after removing the item
            state.totalPrice = state.cart.reduce((total, item) => {
                const price = parseFloat(item.price2.replace("$", "")); 
                return total + price * item.quantity;
            }, 0);
        },
    },
});

export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;
