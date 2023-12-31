import { Currency, Country } from "@/shared/const/common";
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
  isLoading: boolean;
  error?: string;
  readOnly?: boolean;
}
