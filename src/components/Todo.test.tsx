import * as React from "react";
import * as enzyme from "enzyme";
import Todo from "./Todo";
import { List } from "immutable";
import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("Todo test", () => {
  const hello = enzyme.shallow(<Todo text="Hello" completed={true} />);
  expect(hello.find("li").text()).toEqual("Hello");
  expect(hello.find("li").props().style.textDecoration).toEqual("line-through");
});

it("Todo onclick test", () => {
  const onclick = () => { return; };
  const hello = enzyme.shallow(<Todo text="hello" completed={true} onclick={onclick}/>);
  hello.find("li").simulate("click");
  expect(hello.find("li").props().style.textDecoration).toEqual("line-through");
});
