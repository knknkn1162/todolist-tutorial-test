import { TodoAction, StateType } from "../actions";
import { TodoList } from "../states/todoList";
import { initTodo } from "../states/todo";
import { List } from "immutable";

// reducer
export function todoList(state: TodoList, action: TodoAction): TodoList {
  switch (action.type) {
    case StateType.TOGGLE_TODO:
      return state.update(
        action.index,
        (todo) => ({
          ...todo,
          completed: !todo.completed,
        }),
      );
    case StateType.ADD_TODO:
      return state.push(
        initTodo(action.text, false, action.index),
      );
    default:
      return state;
  }
}
