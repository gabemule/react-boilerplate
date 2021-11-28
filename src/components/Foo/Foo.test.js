import React from "react";
import { shallow } from "enzyme";

// Components
import Foo from "./Foo";

// Constants
const FOO_COMPONENT_TEXT = "Foo Component";
const FOO_COMPONENT_CLASS = ".foo";

/**
 * Setup method to avoid code repeat
 * @param props
 * @returns {{wrapper, props}}
 */
function setup(props) {
  const wrapper = shallow(<Foo>{FOO_COMPONENT_TEXT}</Foo>);
  return { wrapper, props };
}

describe("Foo Test Suite", () => {
  it("Should match snapshot", () => {
    expect(Foo).toMatchSnapshot();
  })
  it("Should have class", () => {
    const { wrapper } = setup();
    expect(wrapper.find(FOO_COMPONENT_CLASS).exists()).toBe(true);
  });
  it("Should have text", () => {
    const { wrapper } = setup();
    expect(wrapper.find(FOO_COMPONENT_CLASS).text()).toBe(FOO_COMPONENT_TEXT);
  });
});
