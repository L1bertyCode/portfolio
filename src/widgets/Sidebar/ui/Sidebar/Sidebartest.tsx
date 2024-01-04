import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

import { renderWithTranslation } from "@/shared/lib/tests/renderWithtranslation/renderWithtranslation";
import { MemoryRouter } from "react-router-dom";

describe("Sidebar", () => {
  test("Sidebar", () => {
    renderWithTranslation(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    screen.debug();
    expect(
      screen.getByTestId("sidebar")
    ).toBeInTheDocument();
  });

  test("test toggle", () => {
    renderWithTranslation(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass(
      "collapsed"
    );
    screen.debug();
  });
});
