import { TodoAction, StateType } from "../actions";
import { Todo, initTodo } from "../states/todo";

// reducer
export function todo(state: Todo, action: TodoAction): Todo {
  switch (action.type) {
    case StateType.TOGGLE_TODO:
      return {
        ...state,
        completed: (state.index === action.index) ? !state.completed : state.completed,
      };
    case StateType.ADD_TODO:
      if (state !== undefined) {
        throw new Error("state is not undefined");
      }
      return initTodo(action.text, false, action.index);
    default:
      return state;
  }
}
