import * as React from "react";
import * as enzyme from "enzyme";
import { Todo } from "./components";

import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("Todo test", () => {
  const hello = enzyme.shallow(<Todo text="Hello" completed={true} />);
  expect(hello.find("li").text()).toEqual("Hello");
});
