import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  users: [],
  errorMsg: "",
};

export const getListUser = createAsyncThunk(
  "getListUser",
  async (params, { rejectWithValue }) => {
    let result = { ok: false, response: null };
    const url = `https://65519a4c5c69a7790328f2f2.mockapi.io/employee/listEmployee`;
    // const { auth } = getState();
    // const token = auth.token;
    try {
      const response = await axios.get(url);
      if (response) {
        result.ok = true;
        result.response = response.data;
      }
    } catch (error) {
      if (error.response) {
        result.response = error.response;
      } else {
        rejectWithValue(error.response.data);
      }
    }
    return result;
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [getListUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getListUser.fulfilled]: (state, { payload }) => {
      state.users = payload.response;
      state.isLoading = false;
    },
    [getListUser.rejected]: (state, { payload }) => {
      state.errorMsg = { errorMessage: payload?.error?.message };
      state.isLoading = false;
    },
  },
});

export const { setIsLoading } = homeSlice.actions;

export default homeSlice.reducer;
