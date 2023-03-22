
import {configureStore} from '@reduxjs/toolkit'
import candidateProfileReducer from './candidateProfileReducer'
import recruiterProfileReducer from './recruiterProfileReducer';
// import  userImageReducer from './userImageReducer'


const store=configureStore({
    reducer:{
        candidateprofile:candidateProfileReducer,
        recruiterprofile:recruiterProfileReducer
    }    
})

export default store;