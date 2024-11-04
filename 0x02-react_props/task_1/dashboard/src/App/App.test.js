import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { shallow } from "enzyme";

describe("App", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("renders without crashing", () => {
    expect(component).toBeDefined();
  });

  it("renders the Notifications component", () => {
    expect(component.contains(<Notifications />)).toBe(true);
  });

  it("renders the Header component", () => {
    expect(component.contains(<Header />)).toBe(true);
  });

  it("renders the Login component", () => {
    expect(component.contains(<Login />)).toBe(true);
  });

  it("renders the Footer component", () => {
    expect(component.contains(<Footer />)).toBe(true);
  });
});
