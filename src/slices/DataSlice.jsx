import { createSlice } from '@reduxjs/toolkit';

const DataSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {
        addData: (state, action) => {
            const newState = [...state];
            newState.push(action.payload);
            // console.log(action.payload);
            // console.log(newState);
            return newState;
        },
        resetData: () => {
            const newState = [];
            return newState;
        },
        insertData: (state, action) => {
            const row = action.payload[action.payload.length - 3];
            const col = action.payload[action.payload.length - 2];
            const val = action.payload[action.payload.length - 1];
            // console.log(row + " " + col);
            state[row][col] = val;
            return state;
        },
    },
});

export const { resetData, addData, insertData } = DataSlice.actions;
export default DataSlice.reducer;