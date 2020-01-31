import React from "react";
import { shallow, mount } from "enzyme";
import Login from "./login";
import { TextField } from "@material-ui/core";
import { act } from "react-dom/test-utils";
// // Username input text test
// test("Username input text", () => {
//   const wrapper = shallow(<Login />);

//   wrapper.find('input[type="text"]').simulate("change", {
//     target: { name: "username", value: "shrihari" }
//   });
//   expect(wrapper.state("username")).toEqual("shrihari");
// });
describe("Login component", () => {
  test("Password input text", () => {
    const wrapper = mount(<Login />);
    //   expect(wrapper.find(TextField).defaultValue()).toEqual("");
    console.log(
      wrapper
        .find(TextField)
        .at(1)
        .debug()
    );
  });

  it("should show error when nothing entered", () => {
    const wrapper = mount(<Login />);
    act(() => {
      wrapper
        .find(TextField)
        .at(1)
        .simulate("change", { target: { value: "123" } });
    });
    wrapper.update();
    expect(
      wrapper
        .find(TextField)
        .at(1)
        .props().error
    ).toBe(true);
    expect(
      wrapper
        .find(TextField)
        .at(1)
        .props().helperText
    ).toBe("Wrong Name format.");
  });
});
// Password input text test
