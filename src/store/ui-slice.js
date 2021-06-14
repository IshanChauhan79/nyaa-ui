import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading:true,
  error:false
};
const uiSlice = createSlice({
  name: "torrentData",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading=action.payload.isLoading
      state.error=false
    },
    setError(state, action) {
        state.error=action.payload.isError
        state.loading=false;
      },
  },
});
export const uiReducers=uiSlice.reducer;

export const uiActions = uiSlice.actions;