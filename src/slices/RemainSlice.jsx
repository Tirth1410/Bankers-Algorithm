import { createSlice } from '@reduxjs/toolkit';

const RemainSlice = createSlice({
    name: 'remain',
    initialState: [],
    reducers: {
        addRem: (state, action) => {
            const newState = [...state];
            newState.push(action.payload);
            // console.log(action.payload);
            // console.log(newState);
            return newState;
        },
        resetRem: () => {
            const newState = [];
            return newState;
        },
        insertRem: (state, action) => {
            const row = action.payload[action.payload.length - 3];
            const col = action.payload[action.payload.length - 2];
            const val = action.payload[action.payload.length - 1];
            // console.log(row + " " + col);
            state[row][col] = val;
            return state;
        },
    },
});

export const { resetRem, addRem, insertRem } = RemainSlice.actions;
export default RemainSlice.reducer;