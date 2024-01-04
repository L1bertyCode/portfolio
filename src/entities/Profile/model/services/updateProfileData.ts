import {
  StateSchema,
  ThunkExtraArgs,
} from "@/app/providers/StoreProvider";

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  Profile,
  validateProfileError,
} from "../type/profile";
import { getProfileUserChangeData } from "../selectors/getProfileUserChangeData/getProfileUserChangeData";
import { validateProfileData } from "./vlidateProfileData";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  {
    rejectValue: (typeof validateProfileError)[keyof typeof validateProfileError][];
    extra: ThunkExtraArgs;
    state: StateSchema;
  }
>("profile/updateProfileData", async (_, thunkAPI) => {
  const userUpdateData = getProfileUserChangeData(
    thunkAPI.getState()
  );
  const errorsValidate = validateProfileData(userUpdateData);


  if (errorsValidate?.length) {
    console.log("validateProfileData error", errorsValidate);
    thunkAPI.rejectWithValue(errorsValidate);
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
      validateProfileError.SERVER_ERROR,
    ]);
  }
});
