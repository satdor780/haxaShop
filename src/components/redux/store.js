import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        user: userSlice
    },
    devTools: true
})