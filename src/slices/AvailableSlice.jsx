import { createSlice } from '@reduxjs/toolkit';

const AvailableSlice = createSlice({
    name: 'available',
    initialState: [],
    reducers: {
        addAvail: (state, action) => {
            const newState = [...state, action.payload];
            // console.log(action.payload);
            // console.log(newState);
            return newState;
        },
        resetAvail: () => {
            return []
        },
        insertAvail: (state, action) => {
            // console.log(action.payload.length);
            const val = action.payload[action.payload.length - 1];
            const idx = action.payload[action.payload.length - 2];
            const newState = [...state];
            newState[idx] = val;
            // console.log(newState);
            return newState;
        },
    },
});

export const { resetAvail, reset, addAvail, insertAvail } = AvailableSlice.actions;
export default AvailableSlice.reducer;