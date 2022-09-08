import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ViewUpdateState {
    title: string | null;
    sidebar: {
        open: boolean;
    };
    loading: boolean;
}

const initState: ViewUpdateState = {
    title: null,
    sidebar: {
        open: false,
    },
    loading: false,
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
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});

export const { setTitle, setSidebarOpen, setLoading } = viewUpdate.actions;
export default viewUpdate.reducer;
