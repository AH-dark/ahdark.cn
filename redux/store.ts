import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import viewUpdate from "./reducers/viewUpdate";
import hydrate from "./reducers/hydrate";
import WpData from "./services/wpData";

const store = () =>
    configureStore({
        reducer: {
            viewUpdate,
            hydrate,
            [WpData.reducerPath]: WpData.reducer,
        },
        devTools: process.env.NODE_ENV === "development",
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(thunk).concat(WpData.middleware),
    });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;
export default store;
