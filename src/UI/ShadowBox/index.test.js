import React from "react";
import { shallow, mount } from "enzyme";
import ShadowBox from "./index";
import { create } from "react-test-renderer";
describe("ShadowBox", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ShadowBox />);
  });

  it("should render ShadowBox component ", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should call props.onClick, when logo image is clicked", () => {
    const fn = jest.fn();
    let tree = create(<ShadowBox onClick={fn} />);
    const img = tree.root.findByType("img");
    img.props.onClick();
    expect(fn.mock.calls.length).toBe(1);
  });
});
