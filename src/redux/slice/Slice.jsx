import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAction} from "../action/action";
import axios from "axios";

const initialState = {
  listData: null,
  postData: null, 
  error: null,
};

const userSlice = createSlice({  //get
  name: "get",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.listData = action.payload;
      })
      .addCase(fetchAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});



export default userSlice.reducer;
