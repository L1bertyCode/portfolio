import { getCounter } from "./getCounter";
import { StateSchema } from "@/app/providers/StoreProvider";

describe("getCounter.test", () => {
  test("return state counter", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({
      value: 10,
    });
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getCounter(state as StateSchema)).toEqual(
      undefined
    );
  });
});
