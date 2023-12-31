import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";

describe("getProfileData", () => {
  test("return data", () => {
    const data = {
      firstname: "F",
      lastname: "Ln",
      age: 20,
      currency: Currency.EUR,
      country: Country.German,
      city: "Boston",
      username: "admin",
      avatar: "",
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(
      data
    );
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(
      undefined
    );
  });
});
