import React from "react";
import { shallow, mount } from "enzyme";
import Affiliates from "./Affiliates";
//jest.mock("axios");

import axios from "axios";
import nock from "nock";
//import test from "ava"; // You can use any test framework.

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

  // test("should fetch affiliates", () => {
  //   //const users = [{name: 'Bob'}];
  //   const config = [];
  //   const resp = { data: users };

  //   //axios.get.mockResolvedValue(resp);

  //   // or you could use the following depending on your use case:
  //   axios.get.mockImplementation(() => Promise.resolve(resp));

  //   return AffiliateService.getAffiliateList().then(data =>
  //     expect(data).toEqual(users)
  //   );
  // });

  axios.defaults.adapter = require("axios/lib/adapters/http");
  jest.setTimeout(2000);
  it("can fetch test response", async t => {
    // Set up the mock request.
    const scope = nock("http://demo4760291.mockable.io")
      .get("/partners")
      .reply(200, "{data:{}}");

    await axios.get("http://demo4760291.mockable.io/partners");

    // Assert that the expected request was made.
    scope.done();
  });
});
