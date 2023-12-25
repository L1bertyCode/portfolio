import { Currency, Country } from "@/shared/const/common";
export interface Profile {
  name: string;
  lastname: string;
  age: number;
  currency: (typeof Currency)[keyof typeof Currency];
  country: (typeof Country)[keyof typeof Country];
  city: string;
  username: string;
  avatar: string;
}
export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly?: boolean;
}
