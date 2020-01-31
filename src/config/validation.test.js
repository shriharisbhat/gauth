import React from "react";
import { shallow, mount } from "enzyme";
import { checkValidity } from "./validation";

describe(" validation should return values", () => {
  it(" - send a invalid email and it should return false", () => {
    let result = checkValidity("admi@gmail", {
      required: true,
      email: true
    });
    expect(result).toBeFalsy();
  });

  it(" - send a valid email and it should return true", () => {
    let result = checkValidity("admin@gmail.com", {
      required: true,
      email: true
    });
    expect(result).toBeTruthy();
  });

  it(" - send a invalid password and it should return false", () => {
    let result = checkValidity("A", {
      required: true,
      password: true
    });
    expect(result).toBeFalsy();
  });
  it(" - send a invalid password and it should return false", () => {
    let result = checkValidity("Admin", {
      required: true,
      password: true
    });
    expect(result).toBeFalsy();
  });
  it(" - send a invalid password and it should return false", () => {
    let result = checkValidity("Admin123", {
      required: true,
      password: true
    });
    expect(result).toBeFalsy();
  });

  it(" - send a valid password and it should return true", () => {
    let result = checkValidity("Admin123!", {
      required: true,
      password: true
    });
    expect(result).toBeTruthy();
  });
});
