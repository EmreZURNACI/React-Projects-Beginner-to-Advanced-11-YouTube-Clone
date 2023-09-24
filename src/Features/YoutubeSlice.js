import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    videos: []
}
export const YoutubeSlice = createSlice({
    name: "YoutubeVideos",
    initialState,
    reducers: {
        GetVideos: (state, actions) => {
            state.videos = actions.payload
        }
    }
})
export const { GetVideos } = YoutubeSlice.actions;
export default YoutubeSlice.reducer;