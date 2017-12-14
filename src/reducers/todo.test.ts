import { todo } from "./todo";
import { initTodo } from "../states/todo";
import { StateType } from "../actions";

it("initTodo test", () => {
  expect(initTodo("hello")).toEqual({completed: false, text: "hello", index: 0});
  expect(initTodo("hello", false)).toEqual({completed: false, text: "hello", index: 0});
});

it("todo reducer test", () => {
  let todoState = initTodo("hello", true);
  expect(todo(todoState, {type: StateType.TOGGLE_TODO, index: 0}))
    .toEqual({completed: false, text: "hello", index: 0});

  todoState = initTodo("hello", true);
  expect(todo(todoState, {type: StateType.TOGGLE_TODO, index: 1}))
    .toEqual({completed: true, text: "hello", index: 0});
});
