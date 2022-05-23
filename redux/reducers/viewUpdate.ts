import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ViewUpdateState {
    title: string | null;
    sidebar: {
        open: boolean;
    };
}

const initState: ViewUpdateState = {
    title: null,
    sidebar: {
        open: false,
    },
};

const viewUpdate = createSlice({
    name: "viewUpdate",
    initialState: initState,
    reducers: {
        setTitle(state, action: PayloadAction<string | null>) {
            state.title = action.payload;
        },
        setSidebarOpen(state, action: PayloadAction<boolean>) {
            state.sidebar.open = action.payload;
        },
    },
});

export const { setTitle, setSidebarOpen } = viewUpdate.actions;
export default viewUpdate.reducer;
