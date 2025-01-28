import React from "react";
import "@testing-library/jest-dom";
import { renderer } from "react-test-renderer";

import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component testing", () => {
  test("Title check", () => {
    render(<Header />);
    const title = screen.getByText(/about/i);
    expect(title).toBeInTheDocument();
  });

  test("Header snapshot test", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
