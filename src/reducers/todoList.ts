import { TodoAction, StateType } from "../actions";
import { TodoList } from "../states/todoList";
import { initTodo } from "../states/todo";
import { todo as todoReducer } from "../reducers/todo";
import { List } from "immutable";

// reducer
export function todoList(state: TodoList, action: TodoAction): TodoList {
  switch (action.type) {
    case StateType.TOGGLE_TODO:
      return state.update(
        action.index,
        (todo) => todoReducer(todo, action),
      );
    case StateType.ADD_TODO:
      return state.push(
        todoReducer(undefined, action),
      );
    default:
      return state;
  }
}
