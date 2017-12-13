import * as React from "react";
import * as enzyme from "enzyme";
import Todo from "../containers/Todo";

import * as Reducers from "../reducers/todo";

import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("Todo test", () => {
  // Reducers.todo: export function todo(state: Todo, action: TodoAction): Todo
  const store: Store<Reducers.Todo> = createStore(Reducers.todo, {completed: true, text: "hello", index: 0});
  // mount: (JSX.Element) => enzyme.ReactWrapper
  const hello: enzyme.ReactWrapper = enzyme.mount(
    <Provider store={store}>
      <Todo />
    </Provider>,
  );
  expect(store.getState()).toEqual({completed: true, text: "hello", index: 0});
  expect(hello.find("li").text()).toEqual("hello");
  expect(hello.find("li").props().style.textDecoration).toEqual("line-through");

  expect(hello.find("li").simulate("click"));
  expect(hello.find("li").props().style.textDecoration).toEqual("none");

  expect(store.getState()).toEqual({completed: false, text: "hello", index: 0});
});
