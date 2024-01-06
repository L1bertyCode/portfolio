import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { validateProfileErrors } from "../../type/profile";

describe("getProfileValidateErrors", () => {
  test("return error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [validateProfileErrors.NO_DATA],
      },
    };
    expect(
      getProfileValidateErrors(state as StateSchema)
    ).toEqual([validateProfileErrors.NO_DATA]);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(
      getProfileValidateErrors(state as StateSchema)
    ).toEqual(undefined);
  });
});
