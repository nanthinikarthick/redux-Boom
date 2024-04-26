import { configureStore } from '@reduxjs/toolkit';
import listData from "./slice/Slice";

export default configureStore({
  reducer: {
    listData : listData,
    
  },
});









































