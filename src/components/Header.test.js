import { render } from "@testing-library/react";
import Header from "./Header";

it("checkDivRender", () => {
  const { queryByTitle } = render(<Header />);
  const div = queryByTitle("header");
  expect(div).toBeTruthy();
});
