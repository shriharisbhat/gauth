import React from "react";
import { shallow } from "enzyme";
import Affiliates from "./Affiliates";
describe("Affiliates", () => {
  it("should render my component Affiliates", () => {
    const wrapper = shallow(<Affiliates />);
  });
});
