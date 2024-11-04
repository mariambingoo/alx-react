import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should render an img and a h1", () => {
    expect(wrapper.exists("img")).toBe(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toBe(true);
  });
});
