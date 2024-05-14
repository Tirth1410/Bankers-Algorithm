import { createSlice } from '@reduxjs/toolkit';

const MaxReqSlice = createSlice({
    name: 'maxreq',
    initialState: [],
    reducers: {
        addMaxReq: (state, action) => {
            const newState = [...state];
            newState.push(action.payload);
            // console.log(action.payload);
            // console.log(newState);
            return newState;
        },
        resetMaxReq: () => {
            const  newState = [];
            return newState;
        },
        insertMaxReq: (state, action) => {
            const row = action.payload[action.payload.length - 3];
            const col = action.payload[action.payload.length - 2];
            const val = action.payload[action.payload.length - 1];
            // console.log(row + " " + col);
            state[row][col] = val;
            return state;
        },
    },
});

export const { resetMaxReq, addMaxReq, insertMaxReq } = MaxReqSlice.actions;
export default MaxReqSlice.reducer;