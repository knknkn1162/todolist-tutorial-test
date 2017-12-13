import { TodoAction, StateType } from "../actions";

export interface Todo {
  completed: boolean;
  index: number;
  text: string;
}

export function initTodo(text: string, completed = false, index = 0): Todo {
  return {
    completed: completed,
    index: index,
    text: text,
  };
}
// reducer
export function todo(state: Todo, action: TodoAction): Todo {
  switch (action.type) {
    case StateType.TOGGLE_TODO:
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
}
