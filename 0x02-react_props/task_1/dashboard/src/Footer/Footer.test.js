import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct copyright text", () => {
    const expectedText = `Copyright ${getFullYear()} - ${getFooterCopy()}`;
    expect(wrapper.text()).toBe(expectedText);
  });
});
