import { Currency } from "@/entities/Currency";
import { validateProfileData } from "./validateProfileData";
import { Country } from "@/entities/Country";
import { validateProfileErrors } from "../../type/profile";

describe("validateProfileData.test", () => {
  const data = {
    firstname: "Fn",
    lastname: "Ln",
    age: 20,
    currency: Currency.EUR,
    country: Country.German,
    city: "Boston",
    username: "admin",
    avatar: "avatar1",
  };
  test("success", () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });
  test("without firstname and lastname", () => {
    const result = validateProfileData({
      ...data,
      firstname: "",
      lastname: "",
    });
    expect(result).toEqual([
      validateProfileErrors.INCORRECT_USER_DATA,
    ]);
  });
  test("withoutage", () => {
    const result = validateProfileData({
      ...data,
      age: 0,
    });
    expect(result).toEqual([
      validateProfileErrors.INCORRECT_AGE,
    ]);
  });
  test("without country", () => {
    const result = validateProfileData({
      ...data,
      country: undefined,
    });
    expect(result).toEqual([
      validateProfileErrors.INCORRECT_COUNTRY,
    ]);
  });
  test("without all", () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      validateProfileErrors.INCORRECT_USER_DATA,
      validateProfileErrors.INCORRECT_AGE,
      validateProfileErrors.INCORRECT_COUNTRY,
    ]);
  });
});
