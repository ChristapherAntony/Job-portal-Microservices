import { createSlice } from '@reduxjs/toolkit'

const componentRefreshReducer = createSlice({
    name: 'componentrefresh',
    initialState: false,
    reducers: {
        componentRefresh: (state, action) => {
            return action.payload

        }
    }
})

export const { componentRefresh } = componentRefreshReducer.actions
export default componentRefreshReducer.reducer;

