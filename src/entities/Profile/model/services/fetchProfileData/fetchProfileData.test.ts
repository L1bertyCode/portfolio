import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
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
describe("fetchProfileData", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(
      Promise.resolve({ data: data })
    );
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });
  test("with error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(
      Promise.resolve({ status: 403 })
    );
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
