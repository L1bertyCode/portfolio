import {
  ReducersMapObject,
  configureStore,
} from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
import { loginReducer } from "@/features/AuthByUsername";
import { createReducerManager } from "./reducerManager";
export function createReduxStore(
  initialState?: StateSchema
) {
  const rootRedicers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };
  const reducerManager = createReducerManager(rootRedicers);
  const store = configureStore<StateSchema>({
    reducer: rootRedicers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
  //@ts-ignore
  store.reducerManager = reducerManager;
  return store;
}
// export const store = createReduxStore();

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
