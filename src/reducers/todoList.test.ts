import { todoList } from "./todoList";
import { initTodoList } from "../states/todoList";
import { StateType } from "../actions";
import { List } from "immutable";

it("todo reducer test", () => {
  expect(
    todoList(
      initTodoList(["hello", "goodbye"]),
      {index: 1, type: StateType.TOGGLE_TODO},
    ),
  )
    .toEqual(List([
        {completed: false, index: 0, text: "hello"},
        {completed: true, index: 1, text: "goodbye"},
      ]));

  expect(
    todoList(
      initTodoList(["hello", "goodbye"]),
      {index: 2, type: StateType.ADD_TODO, text: "see"},
    ),
  )
    .toEqual(List([
      {completed: false, index: 0, text: "hello"},
      {completed: false, index: 1, text: "goodbye"},
      {completed: false, index: 2, text: "see"},
    ]));
});
