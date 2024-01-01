import {
  StateSchema,
  ThunkExtraArgs,
} from "@/app/providers/StoreProvider";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "../type/profile";
import { getProfileUserChangeData } from "../selectors/getProfileUserChangeData/getProfileUserChangeData";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  {
    rejectValue: string;
    extra: ThunkExtraArgs;
    state: StateSchema;
  }
>("profile/updateProfileData", async (_, thunkAPI) => {
  const userUpdateData = getProfileUserChangeData(
    thunkAPI.getState()
  );
  try {
    const response = await thunkAPI.extra.api.put<Profile>(
      "/profile",
      userUpdateData
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("Error");
  }
});
