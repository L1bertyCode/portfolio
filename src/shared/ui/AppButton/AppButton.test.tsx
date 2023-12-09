import { render, screen } from "@testing-library/react";
import { AppButton } from "./AppButton";
describe("AppButton", () => {
  test("AppButton ", () => {
    render(<AppButton>Test</AppButton>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  test("AppButton outline", () => {
    render(<AppButton variant="outline">Test</AppButton>);
    expect(screen.getByText("Test")).toHaveClass("outline");
    screen.debug();
  });
});
