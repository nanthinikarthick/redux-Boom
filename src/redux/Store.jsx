import { configureStore } from '@reduxjs/toolkit';
import listData from "./slice/Slice";
import authReducer from "./slice/auth";

export default configureStore({
  reducer: {
    listData : listData,
    auth: authReducer,
    
  },
});







































