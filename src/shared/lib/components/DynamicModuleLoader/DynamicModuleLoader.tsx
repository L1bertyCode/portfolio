import { ReduxStoreWithManager } from "@/app/providers/StoreProvider";
import { StateSchemaKey } from "@/app/providers/StoreProvider/config/StateSchema";
import { loginReducer } from "@/features/AuthByUsername";
import { Reducer } from "@reduxjs/toolkit";
import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useStore } from "react-redux";
export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};
type ReducersListEntry = [StateSchemaKey, Reducer];
interface DynamicModuleLoaderProps {
  children?: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export function DynamicModuleLoader(
  props: DynamicModuleLoaderProps
) {
  const { children, reducers, removeAfterUnmount } = props;

  const dispatch = useDispatch<any>();
  const store = useStore() as ReduxStoreWithManager;
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(
        name as StateSchemaKey,
        reducer
      );
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      Object.entries(reducers).forEach(
        ([name, reducer]) => {
          store.reducerManager.remove(
            name as StateSchemaKey
          );
          if (removeAfterUnmount) {
            dispatch({ type: `@DESTROY ${name}  reducer` });
          }
        }
      );
    };
  }, []);
  const { t } = useTranslation();
  return <>{children}</>;
}
