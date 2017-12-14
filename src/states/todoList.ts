import { List } from "immutable";
import { Todo } from "./todo";

export type TodoList = List<Todo>;

function addTodo(text: string, index: number): Todo {
  return {
    completed: false,
    index: index,
    text: text,
  };
}

export function initTodoList(text: string[]): TodoList {
  return List(
    text.map((t, idx) => {
      return addTodo(t, idx);
    }),
  );
}
