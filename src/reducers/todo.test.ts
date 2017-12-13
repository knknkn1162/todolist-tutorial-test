import { todo } from "./todo";
import { initTodo } from "../states";
import { StateType } from "../actions";

it("initTodo test", () => {
  expect(initTodo("hello")).toEqual({completed: false, text: "hello", index: 0});
  expect(initTodo("hello", false, 1)).toEqual({completed: false, text: "hello", index: 1});
});

it("todo reducer test", () => {
  let todoState = initTodo("hello", true, 0);
  expect(todo(todoState, {type: StateType.TOGGLE_TODO}))
    .toEqual({completed: false, text: "hello", index: 0});

  todoState = initTodo("hello", true, 1);
  expect(todo(todoState, {type: StateType.TOGGLE_TODO}))
    .toEqual({completed: false, text: "hello", index: 1});
});
