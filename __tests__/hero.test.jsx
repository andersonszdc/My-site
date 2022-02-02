/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Home from "../src/components/Hero";
import theme from "../src/styles/themes/pattern";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("rendering index", () => {
  render(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );

  const heading = screen.getByText("Anderson Souza");

  expect(heading).toBeInTheDocument();
});
