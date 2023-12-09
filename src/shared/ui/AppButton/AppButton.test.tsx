import { render, screen } from "@testing-library/react";
import { AppButton } from "./AppButton";
describe("AppButton", () => {
  test("AppButton render", () => {
    render(<AppButton>Test</AppButton>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
