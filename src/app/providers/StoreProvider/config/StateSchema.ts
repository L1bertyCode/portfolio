import { CounterSchema } from "@/entities/Counter";
import { ProfileSchema } from "@/entities/Profile";
import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/features/AuthByUsername";
import {
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  UnknownAction,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  profile: ProfileSchema;
  //Async reducers
  loginForm?: LoginSchema;
}
export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (
    state: StateSchema,
    action: UnknownAction
  ) => StateSchema | any;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}
export interface ReduxStoreWithManager
  extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
export interface ThunkExtraArgs {
  api:AxiosInstance
}
