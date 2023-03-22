import { createSlice } from '@reduxjs/toolkit'

const candidateprofileSlice = createSlice({
    name: 'candidateprofile',
    initialState: {},
    reducers: {
        changeCandidateProfile: (state, action) => {
            return action.payload

        }
    }
})

export const { changeCandidateProfile } = candidateprofileSlice.actions

export default candidateprofileSlice.reducer;