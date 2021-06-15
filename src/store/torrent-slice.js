import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uploaderSelected: "",
  uploaders: ["Golumpa", "Erai-raws", "SubsPlease"],
  search: "",
  sourceSelected: "",
  torrentData: [],
};
const torrentSlice = createSlice({
  name: "torrentData",
  initialState,
  reducers: {
    initTorrent(state, action) {
      state.search = action.payload.search;
      state.sourceSelected = action.payload.source;
    },

    initUploaders(state, action) {
      state.uploaders = state.uploaders.concat(action.payload.data);
    },
    addUploader(state, action) {
      if(state.uploaders.includes(action.payload.uploader)){
        return ;
      }
      state.uploaders = [...state.uploaders, action.payload.uploader];
    },
    uploaderClicked(state, action) {
      if (state.uploaderSelected === action.payload.uploader) {
        state.uploaderSelected = "";
        return;
      }
      state.uploaderSelected = action.payload.uploader;
    },
    deleteUploader(state, action) {
      if (state.uploaderSelected === action.payload.uploader) {
        state.uploaderSelected = "";
      }
      state.uploaders = state.uploaders.filter(
        (upl) => upl !== action.payload.uploader
      );
    },
    updateTorrentData(state, action) {
      state.torrentData = action.payload.torrentData;
    },
  },
});
export const torrentReducer = torrentSlice.reducer;

export const torrentActions = torrentSlice.actions;
