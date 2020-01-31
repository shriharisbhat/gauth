import React from "react";
import { shallow, mount } from "enzyme";
import SimpleModal from "./Modal";
describe("SimpleModal", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SimpleModal />);
  });

  it("should render Modal component ", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
