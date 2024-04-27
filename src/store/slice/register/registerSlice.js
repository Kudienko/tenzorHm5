import { createSlice } from "@reduxjs/toolkit"
import { loginUser } from "../../thunks/registerThunk/registerThunk"

const initialState = {
    user: {},
    isLogged: false
}

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
        })
    }
})


export const { register } = registerSlice.actions

export default registerSlice.reducer