import React from "react";
import { shallow, mount } from "enzyme";
import Affiliates from "./Affiliates";
import ShadowBox from "../../UI/ShadowBox";

const mockAffiliateList = require("./../../__mocks__/affiliates.json");
function mockAffiliatesService() {
  const mockAffiliateList = require("./../../__mocks__/affiliates.json");
  return {
    // ...originalAffiliateService,
    getAffiliateList: jest
      .fn()
      .mockReturnValueOnce(
        new Promise((resolve, reject) => {
          reject({ error: "Something went wrong" });
        })
      )
      .mockReturnValue(
        new Promise((resolve, reject) => {
          resolve(mockAffiliateList);
        })
      ),
    getAuthorize: jest
      .fn()
      .mockReturnValueOnce(
        new Promise((resolve, reject) => {
          reject({ error: "Something went wrong" });
        })
      )
      .mockReturnValue(
        new Promise((resolve, reject) => {
          resolve({
            data: { location: "https://go.discovery.com/" }
          });
        })
      )
  };
}
jest.mock("./../../service/affiliatesService", () => mockAffiliatesService());

describe("Affiliates - testing getAffiliateListData API - ", () => {
  it("should fetch affiliates list - error case", async () => {
    const wrapper = shallow(<Affiliates />);
    const instance = wrapper.instance();
    expect.assertions(1);
    await instance.getAffiliateListData();
    expect(wrapper.state().error).toMatchObject({
      error: "Something went wrong"
    });
  });

  it("should fetch affiliates list - success case", async () => {
    const wrapper = shallow(<Affiliates />);
    const instance = wrapper.instance();
    expect.assertions(1);
    await instance.getAffiliateListData();
    const testData = [mockAffiliateList.data[0], mockAffiliateList.data[1]];
    expect(wrapper.state().affiliateList).toMatchObject(testData);
  });
});

describe("Affiliates - testing callAuthorize API  ", () => {
  // it("should call callAuthorize - error case", async () => {
  //   const wrapper = shallow(<Affiliates />);
  //   const instance = wrapper.instance();
  //   expect.assertions(1);
  //   await instance.callAuthorize(1);
  //   expect(wrapper.state().error).toMatchObject({
  //     error: "Something went wrong"
  //   });
  // });

  it("should call callAuthorize - success case", async () => {
    const wrapper = shallow(<Affiliates />);
    const instance = wrapper.instance();
    // expect.assertions(1);
    await instance.callAuthorize(1);
    // expect(wrapper.state().location).toEqual("https://go.discovery.com/");
    jest.spyOn(window.location, "assign").mockImplementation(l => {
      expect(l).toEqual("https://go.discovery.com/");
    });
    window.location.assign.mockClear();
  });
});

describe("Affiliates", () => {
  it("should render Affiliates component ", () => {
    const wrapper = mount(<Affiliates />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should initilize state values properly", () => {
    const wrapper = mount(<Affiliates />);
    expect(wrapper.state()).toEqual({
      affiliateList: [],
      error: null,
      location: null
    });
  });

  it("should call  getAffiliateListData", () => {
    const wrapper = shallow(<Affiliates />);
    const instance = wrapper.instance();
    let spy = jest.spyOn(instance, "getAffiliateListData");
    instance.componentDidMount();
    expect(instance.getAffiliateListData).toHaveBeenCalled();
  });
});
describe("Affiliates", () => {
  it("should call  callAuthorize", () => {
    const wrapper = shallow(<Affiliates />);
    const instance = wrapper.instance();
    let spy = jest.spyOn(instance, "callAuthorize");
    instance.callAuthorize();
    expect(instance.callAuthorize).toHaveBeenCalled();
  });
});
