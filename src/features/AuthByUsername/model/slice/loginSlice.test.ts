import { StateSchema } from "@/app/providers/StoreProvider";
import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

describe("loginSlice.test", () => {
  test("set username", () => {
    const state: DeepPartial<LoginSchema> = {
      username: "user",
    };
    expect(
      loginReducer(
        state as LoginSchema,
        loginActions.setUsername("username")
      )
    ).toEqual({ username: "username" });
  });

  test("set password", () => {
    const state: DeepPartial<LoginSchema> = {
      password: "123",
    };
    expect(
      loginReducer(
        state as LoginSchema,
        loginActions.setPassword("12345")
      )
    ).toEqual({ password: "12345" });
  });
});
