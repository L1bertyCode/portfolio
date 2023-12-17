import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
describe("Button", () => {
  test("Button ", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  test("Button outline", () => {
    render(<Button variant="outline">Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("outline");
    screen.debug();
  });
});
