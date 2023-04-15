import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        changeLoading: (state, action) => {
            return action.payload

        }
    }
})

export const { changeLoading } = loadingSlice.actions
export default loadingSlice.reducer;

