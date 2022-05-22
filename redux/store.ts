import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import viewUpdate from "./reducers/viewUpdate";
import hydrate from "./reducers/hydrate";

const store = () =>
    configureStore({
        reducer: {
            viewUpdate,
            hydrate,
        },
        devTools: process.env.NODE_ENV === "development",
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export default store;
