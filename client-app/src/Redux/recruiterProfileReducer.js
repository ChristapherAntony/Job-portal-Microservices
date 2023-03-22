import { createSlice } from '@reduxjs/toolkit'

const recruiterProfileReducer = createSlice({
    name: 'recruiterprofile',
    initialState: {},
    reducers: {
        changeRecruiterProfile: (state, action) => {
            return action.payload

        }
    }
})

export const { changeRecruiterProfile } = recruiterProfileReducer.actions

export default recruiterProfileReducer.reducer;