
import {configureStore} from '@reduxjs/toolkit'
import candidateProfileReducer from './candidateProfileReducer'
import recruiterProfileReducer from './recruiterProfileReducer';
import searchKeyReducer from './searchKeyReducer';
import componentRefreshReducer from './componentRefreshReducer';
import loadingReducer from './loadingReducer';
// import  userImageReducer from './userImageReducer'


const store=configureStore({
    reducer:{
        candidateprofile:candidateProfileReducer,
        recruiterprofile:recruiterProfileReducer,
        searchkey:searchKeyReducer,
        componentrefresh:componentRefreshReducer,
        loading:loadingReducer
    }    
})

export default store;