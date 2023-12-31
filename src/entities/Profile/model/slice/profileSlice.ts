import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../type/profile";
import { fetchProfileData } from "../services/fetchProfileData";

const initialState: ProfileSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
  userChangeData:undefined,
  readOnly: true,
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
    cancelUpdateProfile: (state) => {
      state.readOnly = false;
      state.userChangeData = state.data;
    },
    updateProfile: (
      state,
      action: PayloadAction<Profile>
    ) => {
      state.userChangeData = {
        ...state.data,
        ...action.payload,
      };
    },
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
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
