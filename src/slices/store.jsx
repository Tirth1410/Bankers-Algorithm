import { configureStore } from '@reduxjs/toolkit';
import pageSlice from "./PageSlice.jsx";
import DataSlice from "./DataSlice.jsx";
import MaxReqSlice from "./MaxReqSlice.jsx";
import RemainSlice from "./RemainSlice.jsx";
import AvailableSlice from "./AvailableSlice.jsx";
export const store = configureStore({
    reducer: {
        page: pageSlice,
        data: DataSlice,
        maxreq: MaxReqSlice,
        remain: RemainSlice,
        available: AvailableSlice,
    }
});