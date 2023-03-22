import { createSlice } from '@reduxjs/toolkit'

const recruiterProfileReducer = createSlice({
    name: 'recruiterprofile',
    initialState: {is_verified:true},
    reducers: {
        changeRecruiterProfile: (state, action) => {
            return action.payload

        }
    }
})

export const { changeRecruiterProfile } = recruiterProfileReducer.actions

export default recruiterProfileReducer.reducer;