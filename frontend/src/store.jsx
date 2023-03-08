import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from './services/userAuthApi'
import { combineReducers} from "redux";

// import authReducer from '../features/authSlice'
// import userReducer from '../features/userSlice'



export const store2 = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    // auth: authReducer,
    // user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
})

setupListeners(store2.dispatch)



