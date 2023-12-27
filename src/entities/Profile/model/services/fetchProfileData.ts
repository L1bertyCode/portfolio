import { ThunkExtraArgs } from "@/app/providers/StoreProvider";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "../type/profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  { rejectValue: string; extra: ThunkExtraArgs }
>("profile/fetchProfileData", async (_, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get<Profile>(
      "profile"
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("Error");
  }
});
