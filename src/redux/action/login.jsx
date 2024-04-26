import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postAction = createAsyncThunk(
    "customer/postAction",
    async (formData, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://18.118.43.220/boomAPI/boom/api/v1/user/login', formData)
        return response.data;
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data);
        } else {
          return rejectWithValue(error.response.data);
        }
      }
    }
  );
  
  export const userLogin = createAsyncThunk(
    'post/userLogin',
    async (formData, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${'http://18.118.43.220/boomAPI/boom/api/v1/merchant'}/`, formData);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
  );