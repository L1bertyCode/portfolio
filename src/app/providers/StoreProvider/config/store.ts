import {
  ReducersMapObject,
  configureStore,
} from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
export function createReduxStore(
  initialState?: StateSchema
) {
  const rootRedicers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootRedicers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
// export const store = createReduxStore();

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
