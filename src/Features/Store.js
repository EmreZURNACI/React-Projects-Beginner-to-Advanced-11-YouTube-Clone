import { configureStore } from "@reduxjs/toolkit";
import YoutubeReducer from './YoutubeSlice';
import KeywordReducer from './KeywordSlice';
export const Store = configureStore({
    reducer: {
        YoutubeReducer: YoutubeReducer,
        KeywordReducer: KeywordReducer
    }
})