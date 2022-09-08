import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import viewUpdate from "./reducers/viewUpdate";
import hydrate from "./reducers/hydrate";
import api from "./services/api";

const store = configureStore({
    reducer: {
        viewUpdate,
        hydrate,
        [api.reducerPath]: api.reducer,
    },
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk).concat(api.middleware),
});

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppStore["dispatch"]>();

export const { dispatch } = store;

export default store;
