import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("Should render the Counter default value 0", () => {
  render(<Counter />);
  const counterValue = screen.getByText("0");
  expect(counterValue).toBeInTheDocument();
});
test("Should render increament button", () => {
  render(<Counter />);
  const increamentBtn = screen.getByRole("button", { name: /Increament/i });
  expect(increamentBtn).toBeInTheDocument();
  expect(increamentBtn).toBeEnabled();
});
test("Should render decreament button", () => {
  render(<Counter />);
  const decreamentBtn = screen.getByRole("button", { name: /decreament/i });
  expect(decreamentBtn).toBeInTheDocument();
  expect(decreamentBtn).toBeEnabled();
});
test("Increse the counter when increamentBtn is clicked & decrease when decreament button is clicked", () => {
  render(<Counter />);
  const counterValue = screen.getByText("0");
  const increamentBtn = screen.getByRole("button", { name: /Increament/i });
  const decreamentBtn = screen.getByRole("button", { name: /decreament/i });
  fireEvent.click(increamentBtn);
  expect(counterValue).toHaveTextContent("1");
  fireEvent.click(decreamentBtn);
  expect(counterValue).toHaveTextContent("0");
});
test("counter stops at 0 when decreament button is clicked", () => {
  render(<Counter />);
  const counterValue = screen.getByText("0");
  const decreamentBtn = screen.getByRole("button", { name: /decreament/i });
  fireEvent.click(decreamentBtn);
  expect(counterValue).toHaveTextContent("0");
});
