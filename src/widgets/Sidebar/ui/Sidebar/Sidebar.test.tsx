import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("Sidebar", () => {
    render(<Sidebar />);
    screen.debug();
  });
});
