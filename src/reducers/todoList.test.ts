import { todoList } from "./todoList";
import { initTodoList } from "../states/todoList";
import { StateType } from "../actions";
import { List } from "immutable";

it("todo toggle-todo test", () => {
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
});

it("todo add_todo test", () => {
  expect(
    todoList(
      initTodoList([]),
      {index: 0, type: StateType.ADD_TODO, text: "hello"},
    ),
  )
    .toEqual(List([
      {completed: false, index: 0, text: "hello"},
    ]));
});
