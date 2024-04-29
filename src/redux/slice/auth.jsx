
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     token: localStorage.getItem("token") || null,
//   },
//   reducers: {
//     setToken: (state, action) => {
//       state.token = action.payload;
//       localStorage.setItem("token", action.payload);
//     },
//     clearToken: (state) => {
//       state.token = null;
//       localStorage.removeItem("token");
//     },
//   },
// });

// export const { setToken, clearToken } = authSlice.actions;

// export const selectToken = (state) => state.auth.token;

// export default authSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     token: localStorage.getItem("token") || null,
//   },
//   reducers: {
//     setToken: (state, action) => {
//       state.token = action.payload;
//       localStorage.setItem("token", action.payload);
//     },
//     clearToken: (state) => {
//       state.token = null;
//       localStorage.removeItem("token");
//     },
//   },
// });

// export const { setToken, clearToken } = authSlice.actions;

// export const selectToken = (state) => state.auth.token;

// export default authSlice.reducer;
