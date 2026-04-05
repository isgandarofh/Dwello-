import { configureStore } from "@reduxjs/toolkit";
import servicesSlice from "./slices/servicesSlice";
import residenceSlice from "./slices/residenceSlice";

export const store = configureStore({
    reducer : {
        'services' : servicesSlice,
        'residence' : residenceSlice
    }
})