import {
  StateSchema,
  ThunkExtraArgs,
} from "@/app/providers/StoreProvider";

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  Profile,
  validateProfileErrors,
} from "../type/profile";
import { getProfileUserChangeData } from "../selectors/getProfileUserChangeData/getProfileUserChangeData";
import { validateProfileData } from "./vlidateProfileData";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  {
    rejectValue: (typeof validateProfileErrors)[keyof typeof validateProfileErrors][];
    extra: ThunkExtraArgs;
    state: StateSchema;
  }
>("profile/updateProfileData", async (_, thunkAPI) => {
  const userUpdateData = getProfileUserChangeData(
    thunkAPI.getState()
  );
  const validateErrors =
    validateProfileData(userUpdateData);
  if (validateErrors.length) {
    return thunkAPI.rejectWithValue(validateErrors);
  }
  try {
    const response = await thunkAPI.extra.api.put<Profile>(
      "/profile",
      userUpdateData
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue([
      validateProfileErrors.SERVER_ERROR,
    ]);
  }
});
