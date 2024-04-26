import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth/authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
    }
})

export default store