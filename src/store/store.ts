import { configureStore } from "@reduxjs/toolkit";
import servicesSlice from "./slices/ServicesSlice";

export const store = configureStore({
    reducer : {
        'services' : servicesSlice
    }
})