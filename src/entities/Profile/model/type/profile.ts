import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
export const validateProfileErrors = {
  INCORRECT_USER_DATA: "INCORRECT_USER_DATA",
  INCORRECT_AGE: "INCORRECT_AGE",
  INCORRECT_COUNTRY: "INCORRECT_COUNTRY",
  NO_DATA: "NO_DATA",
  SERVER_ERROR: "SERVER_ERROR",
} as const;
export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: (typeof Currency)[keyof typeof Currency];
  country?: (typeof Country)[keyof typeof Country];
  city?: string;
  username?: string;
  avatar?: string;
}
export interface ProfileSchema {
  data?: Profile;
  userChangeData?: Profile;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  validateErrors?: (typeof validateProfileErrors)[keyof typeof validateProfileErrors][];
}
