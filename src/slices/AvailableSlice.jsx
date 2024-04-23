import { createSlice } from '@reduxjs/toolkit';

const AvailableSlice = createSlice({
    name: 'available',
    initialState: [],
    reducers: {
        addAvail: (state, action) => {
            const newState = [...state, action.payload];
            console.log(action.payload);
            console.log(newState);
            return newState;
        },
        resetAvail: () => {
            return []
        },
        insertAvail: (state, action) => {
            const val = action.payload[action.payload.length - 1];
            state.push(val);
            return state;
        },
    },
});

export const { resetAvail, reset, addAvail, insertAvail } = AvailableSlice.actions;
export default AvailableSlice.reducer;