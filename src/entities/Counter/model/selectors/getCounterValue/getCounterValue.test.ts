import { StateSchema } from "@/app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue.test", () => {
  test("should return", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(
      10
    );
  });

    test("should work with empty state", () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getCounterValue(state as StateSchema)).toEqual(
        undefined
      );
    });
});
