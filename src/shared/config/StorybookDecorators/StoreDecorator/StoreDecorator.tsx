import {
  StateSchema,
  StoreProvider,
} from "@/app/providers/StoreProvider";
import { profileReducer } from "@/entities/Profile";
import { loginReducer } from "@/features/AuthByUsername";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { StoryFn } from "@storybook/react";
const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};
export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
  ) =>
  (Story: StoryFn) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{
          ...defaultAsyncReducers,
          ...asyncReducers,
        }}
      >
        <Story />
      </StoreProvider>
    );
  };
