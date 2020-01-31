import React from "react";
import { shallow, mount } from "enzyme";
import index from "./index";
it("renders without crashing", () => {
  expect(
    JSON.stringify(
      Object.assign({}, index, { _reactInternalInstance: "censored" })
    )
  ).toMatchSnapshot();
});
