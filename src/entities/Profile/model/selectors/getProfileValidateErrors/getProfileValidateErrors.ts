import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfileValidateErrors = (
  state: StateSchema
) => {
  console.log(
    "state.profile?.validateErrors",
    state
  );

  return state.profile?.validateErrors;
};
