import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfileUserChangeData = (
  state: StateSchema
) => state.profile?.userChangeData || undefined;
