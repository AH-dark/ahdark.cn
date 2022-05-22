import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ViewUpdateState {
    title: string | null;
    sidebarOpen: boolean;
}

const initState: ViewUpdateState = {
    title: null,
    sidebarOpen: false,
};

const viewUpdate = createSlice({
    name: "viewUpdate",
    initialState: initState,
    reducers: {
        setTitle(state, action: PayloadAction<string | null>) {
            state.title = action.payload;
        },
        setSidebarOpen(state, action: PayloadAction<boolean>) {
            state.sidebarOpen = action.payload;
        },
    },
});

export const { setTitle, setSidebarOpen } = viewUpdate.actions;
export default viewUpdate.reducer;
