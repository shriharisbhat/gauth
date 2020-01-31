import React from "react";
import { shallow, mount } from "enzyme";
import Affiliates from "./Affiliates";
describe("Affiliates", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Affiliates />);
  });

  it("should render Affiliates component ", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should initilize state values properly", () => {
    expect(wrapper.state()).toEqual({ affiliateList: [], error: null });
  });
});
