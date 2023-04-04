import { createSlice } from '@reduxjs/toolkit'

const searchKeyReducer = createSlice({
    name: 'searchkey',
    initialState: {
        jobKey: '',
        locationKey: '',
        companyKey:'',
        employmentType:''
    },
    reducers: {
        changeSearchKey: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});
export const { changeSearchKey } = searchKeyReducer.actions

export default searchKeyReducer.reducer;