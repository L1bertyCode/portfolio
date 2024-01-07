import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { updateProfileData } from "./updateProfileData";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { validateProfileErrors } from "../../type/profile";
const data = {
  firstname: "F",
  lastname: "Ln",
  age: 20,
  currency: Currency.EUR,
  country: Country.German,
  city: "Boston",
  username: "admin",
  avatar: "avatar1",
};
describe("updateProfileData.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        userChangeData: data,
      },
    });
    thunk.api.put.mockReturnValue(
      Promise.resolve({ data: data })
    );
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });
  test("server error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        userChangeData: data,
      },
    });
    thunk.api.put.mockReturnValue(
      Promise.resolve({ status: 403 })
    );
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([
      validateProfileErrors.SERVER_ERROR,
    ]);
  });
  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        userChangeData: { ...data, lastname: "" },
      },
    });
 
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([
      validateProfileErrors.INCORRECT_USER_DATA,
    ]);
  });
});
