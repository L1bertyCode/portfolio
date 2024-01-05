import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../type/profile";
import { fetchProfileData } from "../services/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData";

const initialState: ProfileSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
  userChangeData: undefined,
  readOnly: true,
  validateErrors: undefined,
};
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setReadOnly: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.readOnly = action.payload;
    },
    updateProfile: (
      state,
      action: PayloadAction<Profile>
    ) => {
      state.userChangeData = {
        ...state.userChangeData,
        ...action.payload,
      };
    },
    cancelUpdateProfile: (state) => {
      state.readOnly = true;
      state.userChangeData = state.data;
      state.validateErrors = undefined;
    },
    // saveUpdateProfile: (state) => {
    //   state.readOnly = true;
    //   state.data = state.userChangeData;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      fetchProfileData.rejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
    builder.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.userChangeData = action.payload;
      }
    );
    builder.addCase(updateProfileData.pending, (state) => {
      state.validateErrors = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      updateProfileData.rejected,
      (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      }
    );
    builder.addCase(
      updateProfileData.fulfilled,
      (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.userChangeData = action.payload;
        state.readOnly = true;
        state.validateErrors = undefined;
      }
    );
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
