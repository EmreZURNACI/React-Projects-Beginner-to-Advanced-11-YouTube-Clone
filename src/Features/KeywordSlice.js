import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    keyword: ""
}
export const KeywordSlice = createSlice({
    name: "keyword",
    initialState,
    reducers: {
        GetKey: (state, actions) => {
            state.keyword = actions.payload;
        }
    }
})
export const { GetKey } = KeywordSlice.actions
export default KeywordSlice.reducer