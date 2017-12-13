import * as React from "react";
import * as enzyme from "enzyme";
import TodoList from "./TodoList";
import { List, Range } from "immutable";
import * as Adapter from "enzyme-adapter-react-16";
import { addTodo } from "../states";

enzyme.configure({ adapter: new Adapter() });

it("Todo test", () => {
  const hello = enzyme.mount(
    <TodoList
      todos={List([
        addTodo("hello"),
        addTodo("goodbye"),
      ])}
    />,
    );
  expect(
    Range().take(2).map(
      (i) => hello.find("li").at(i).text()).toArray(),
  ).toEqual(["hello", "goodbye"]);
  expect(
    Range().take(2).map(
      (i) => hello.find("li").at(i).props().style.textDecoration).toArray(),
  ).toEqual(["none", "none"]);
});

it("Todo onclick test", () => {
  const onTodoclick = (idx: number) => { return; };
  const hello = enzyme.mount(
    <TodoList
      todos={List([
        addTodo("hello"),
        addTodo("goodbye"),
      ])}
      onTodoClick={onTodoclick}
    />,
  );
  hello.find("li").forEach((w) => w.simulate("click"));
  expect(
    Range().take(2).map(
      (i) => hello.find("li").at(i).props().style.textDecoration).toArray(),
  ).toEqual(["none", "none"]);
});
