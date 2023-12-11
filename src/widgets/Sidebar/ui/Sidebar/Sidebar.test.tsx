import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

import { renderWithTranslation } from "@/shared/lib/tests/renderWithtranslation/renderWithtranslation";

describe("Sidebar", () => {
  test("Sidebar", () => {
    renderWithTranslation(<Sidebar />);
    screen.debug();
    expect(
      screen.getByTestId("sidebar")
    ).toBeInTheDocument();
  });

  test("test toggle", () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass(
      "collapsed"
    );
    screen.debug();
  });
});
