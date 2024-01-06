import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileUserChangeData } from "./getProfileUserChangeData";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";

describe("getProfileUserChangeData", () => {
  test("return data", () => {
    const userChangeData = {
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
        userChangeData,
      },
    };
    expect(
      getProfileUserChangeData(state as StateSchema)
    ).toEqual(userChangeData);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(
      getProfileUserChangeData(state as StateSchema)
    ).toEqual(undefined);
  });
});
