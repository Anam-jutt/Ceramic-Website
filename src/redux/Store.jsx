import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice, // Keep this consistent throughout your components
    }
});

export default store;
