import { createSlice } from '@reduxjs/toolkit';
import {atom as state} from "recoil";
const initialState = 0;
const name = 'page';

const pageSlice = createSlice({
    name: 'page',
    initialState: {
        value: 0
    },
    reducers: {
        setCurrentPage: (state,action) => {
            state.value = action.payload
            console.log(action.payload)
        },
        increment: state => { state.value+=1 },
        decrement: state => { state.value-=1 },
    },
})
export const { setCurrentPage, increment, decrement } = pageSlice.actions;
export default pageSlice.reducer;