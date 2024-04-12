import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders NotificationItem elements", () => {
    expect(wrapper.find(NotificationItem).length).toEqual(3);
  });

  it("renders the text 'Here is the list of notifications'", () => {
    expect(wrapper.text()).toContain("Here is the list of notifications");
  });

  it("renders the first NotificationItem element with correct HTML", () => {
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    const htmlProp = firstNotificationItem.prop("html");
    expect(htmlProp).toEqual({ __html: "<u>test</u>" });
  });
});
