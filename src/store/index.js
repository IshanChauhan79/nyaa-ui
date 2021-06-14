import {  configureStore } from "@reduxjs/toolkit";
import { torrentReducer } from "./torrent-slice";
import { uiReducers } from "./ui-slice";

const store = configureStore({
  reducer:{ torrentSlice:torrentReducer,uiSlice:uiReducers}
});


// console.log(torrentSlice.actions)

export default store;
