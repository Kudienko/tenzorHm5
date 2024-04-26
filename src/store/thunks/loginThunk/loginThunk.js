import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../utils/axios";

export const loginUser = createAsyncThunk(
    '/login',
    async (data, {rejectWithValue}) => {
        try {
            const user = await instance.post('/api/auth/jwt/login', data)
            return user
        } catch (error) {
            if (error.response  && error.response.data.message) {
               return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)