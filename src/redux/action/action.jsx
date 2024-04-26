import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAction = createAsyncThunk(
  "login/loginAction",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${'https://641195a0a7b02f6a03fec09a.mockapi.io'}/Mock`,
      );
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


export const postAction = createAsyncThunk(
  "customer/postAction",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${'https://641195a0a7b02f6a03fec09a.mockapi.io'}/Mock`, formData
      );
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

export const updateAction = createAsyncThunk(
  "update/updateAction", 
  async (formData) => { 
    try {
      const response = await axios.put( 
      `${'https://641195a0a7b02f6a03fec09a.mockapi.io'}/Mock/${formData.id}`, formData
      );
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

export const deleteAction = createAsyncThunk(
  "delete/deleteAction", 
  async (userId, { dispatch }) => { 
    try {
      await axios.delete( 
        `${'https://641195a0a7b02f6a03fec09a.mockapi.io'}/Mock/${userId}` 
      );
      return userId;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);