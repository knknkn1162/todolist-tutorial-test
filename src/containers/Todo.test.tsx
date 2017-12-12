import * as React from "react";
import * as enzyme from "enzyme";
import Todo, { StateFromProps } from "../containers/Todo";

import * as Reducers from "../reducers";

import { createStore, Store } from "redux";
import { Provider } from "react-redux";

import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("Todo test", () => {
  // Reducers.todo: export function todo(state: Todo, action: TodoAction): Todo
  const store: Store<StateFromProps> = createStore(Reducers.todo, {completed: true, text: "hello"});
  // mount: (JSX.Element) => enzyme.ReactWrapper
  const hello: enzyme.ReactWrapper = enzyme.mount(
    <Provider store={store}>
      <Todo />
    </Provider>,
  );
  expect(store.getState()).toEqual({completed: true, text: "hello"});
  expect(hello.find("li").text()).toEqual("hello");
  expect(hello.find("li").props().style.textDecoration).toEqual("line-through");

  expect(hello.find("li").simulate("click"));
  expect(hello.find("li").props().style.textDecoration).toEqual("none");

  expect(store.getState()).toEqual({completed: false, text: "hello"});
});
