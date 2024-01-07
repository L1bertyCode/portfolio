import { Currency } from "@/entities/Currency";
import {
  ProfileSchema,
  validateProfileErrors,
} from "../type/profile";
import { Country } from "@/entities/Country";
import {
  profileActions,
  profileReducer,
} from "./profileSlice";
import { StateSchema } from "@/app/providers/StoreProvider";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { AsyncThunkPendingActionCreator } from "@reduxjs/toolkit/dist/createAsyncThunk";

describe("profileSlice", () => {
  const data = {
    firstname: "F",
    lastname: "Ln",
    age: 20,
    currency: Currency.EUR,
    country: Country.German,
    city: "Boston",
    username: "admin",
    avatar: "avatar1",
  };
  test("readOnly", () => {
    const state: DeepPartial<ProfileSchema> = {
      readOnly: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.setReadOnly(false)
      )
    ).toEqual({ readOnly: false });
  });
  test("cancelUpdateProfile", () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      userChangeData: { lastname: "" },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.cancelUpdateProfile()
      )
    ).toEqual({
      readOnly: true,
      validateErrors: undefined,
      userChangeData: data,
      data,
    });
  });
  test("updateProfile", () => {
    const state: DeepPartial<ProfileSchema> = {
      userChangeData: { username: "Fn" },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: "Un" })
      )
    ).toEqual({
      userChangeData: { username: "Un" },
    });
  });

  test("test updateProfileData pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      error: undefined,
      data: undefined,
      userChangeData: undefined,
      readOnly: true,
      isLoading: false,
      validateErrors: [validateProfileErrors.SERVER_ERROR],
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.pending("")
      )
    ).toEqual({
      isLoading: true,
      readOnly: true,
      userChangeData: undefined,
      validateErrors: undefined,
    });
  });
  test("test update profile service fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      isLoading: false,
      data: data,
      userChangeData: data,
      readOnly: true,
      validateError: undefined,
    });
  });
});
