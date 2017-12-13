import { TodoAction, StateType } from "../actions";
import { Todo } from "../states";

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
