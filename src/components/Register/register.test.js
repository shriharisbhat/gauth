import React from "react";
import { mount } from "enzyme";
import Register from "./register";
import { render, fireEvent } from "@testing-library/react";

describe("Register component", () => {
  // Password input text test
  it("should show error when nothing entered", () => {
    const { getByTestId } = render(<Register />);
    // const output = getByTestId("output");
    const emailInput = getByTestId("emailInput");
    const submit = getByTestId("submit");

    expect(emailInput).toBeEmpty("");
    expect(emailInput).toHaveValue("");
    fireEvent.change(emailInput, { target: { value: "Sama@gmail.com" } });
    fireEvent.click(submit);
    expect(emailInput).toHaveValue("Sama@gmail.com");
  });

  // Password input text test
  it("should show error when nothing entered", () => {
    const { getByTestId } = render(<Register />);
    // const output = getByTestId("output");
    const pwdInput = getByTestId("pwdInput");
    const submit = getByTestId("submit");

    expect(pwdInput).toBeEmpty("");
    expect(pwdInput).toHaveValue("");
    fireEvent.change(pwdInput, { target: { value: "Sama" } });
    fireEvent.click(submit);
    expect(pwdInput).toHaveValue("Sama");
  });
});
