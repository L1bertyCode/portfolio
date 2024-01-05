import {
  Profile,
  validateProfileErrors,
} from "../type/profile";

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [validateProfileErrors.NO_DATA];
  }
  const errors: (typeof validateProfileErrors)[keyof typeof validateProfileErrors][] =
    [];
  const { firstname, lastname, age, country } = profile;
  if (!firstname || !lastname) {
    errors.push(validateProfileErrors.INCORRECT_USER_DATA);
  }
  if (!age || !Number.isInteger(age)) {
    errors.push(validateProfileErrors.INCORRECT_AGE);
  }
  if (!country) {
    errors.push(validateProfileErrors.INCORRECT_COUNTRY);
  }
  return errors;
};
