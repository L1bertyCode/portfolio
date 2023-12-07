import { classNames } from "./classNames";

describe("classNames", () => {
  test("cls", () => {
    expect(classNames("some class"));
  });
  test("with Mods", () => {
    expect(
      classNames("some class", {
        hovered: true,
        collapsed: true,
        disable: false,
      })
    );
  });
});
