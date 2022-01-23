import { all } from "@redux-saga/core/effects";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "./authReducer";
import { watchAuth } from "./authSagas";
import { listReducer } from "./listReducer";
import { watchList } from "./listSagas";

const rootReducer = combineReducers({
    auth: authReducer,
    list: listReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootWatcher() {
    yield all([watchAuth(), watchList()]);
}

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof rootReducer>;
