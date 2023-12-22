import {
  StateSchema,
  StoreProvider,
} from "@/app/providers/StoreProvider";
import { StoryFn } from "@storybook/react";

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (Story: StoryFn) => {
    return (
      <StoreProvider initialState={state}>
        <Story />
      </StoreProvider>
    );
  };
