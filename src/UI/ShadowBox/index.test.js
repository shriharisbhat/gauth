import React from "react";
import { shallow, mount } from "enzyme";
import ShadowBox from "./index";
describe("ShadowBox", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ShadowBox />);
  });

  it("should render ShadowBox component ", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
