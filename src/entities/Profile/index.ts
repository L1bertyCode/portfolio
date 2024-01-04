export { getProfileValidateErrors } from "./model/selectors/getProfileValidateErrors/getProfileValidateErrors";
export { updateProfileData } from "./model/services/updateProfileData";
export { getProfileReadOnly } from "./model/selectors/getProfileReadOnly/getProfileReadOnly";
export { getProfileError } from "./model/selectors/getProfileError/getProfileError";
export { getProfileIsLoading } from "./model/selectors/getProfileIsLoading/getProfileIsLoading";
export { getProfileData } from "./model/selectors/getProfileData/getProfileData";
export { ProfileCard } from "./ui/ProfileCard/ProfileCard";
      

export { fetchProfileData } from "./model/services/fetchProfileData";

export {
  profileActions,
  profileReducer,
} from "./model/slice/profileSlice";

export {
  Profile,
  ProfileSchema,
} from "./model/type/profile";
