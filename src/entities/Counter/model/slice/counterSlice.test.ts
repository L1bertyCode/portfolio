import { StateSchema } from "@/app/providers/StoreProvider";
import {
  counterActions,
  counterReducer,
  counterSlice,
} from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice", () => {
  test("should return decrement value", () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(
      counterReducer(state, counterActions.decrement())
    ).toEqual({ value: 9 });
  });
  test("should return increment value", () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(
      counterReducer(state, counterActions.increment())
    ).toEqual({ value: 11 });
  });
  test("should work with empry start", () => {
    expect(
      counterReducer(undefined, counterActions.increment())
    ).toEqual({ value: 1 });
  });
});
