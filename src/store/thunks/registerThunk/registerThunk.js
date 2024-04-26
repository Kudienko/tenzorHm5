import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance, instanceRegister } from "../../../utils/axios/index"

export const registerUser = createAsyncThunk(
    '/register',
    async (data, {rejectWithValue}) => {
        try {
            const user = await instanceRegister.post('/api/auth/register', data)
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