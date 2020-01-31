import React from "react";
import { shallow, mount } from "enzyme";
import Register from "./Register";
describe("Register", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Register />);
  });

  it("should render Register component ", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
