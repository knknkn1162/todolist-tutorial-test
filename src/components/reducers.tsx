import { VISIBILITY_FILTERS, TodoAction } from './actions';
import {List, Seq} from 'immutable';
import {ADD_TODO, AddTodo,
   TOGGLE_TODO, ToggleTodo,
    SET_VISIBILITY_FILTER, SetVisibilityFilter} from './actions';

export interface Todo {
  text: string;
  completed: boolean;
}

interface State {
  visibilityFilter: VISIBILITY_FILTERS;
  todos: List<Todo>;
}

// note that State can't be **immutable** so, set const.
const initialState: State = {
  visibilityFilter: VISIBILITY_FILTERS.SHOW_ALL,
  todos: List(),
}

// reducer create newState
export default function todoApp(state: State = initialState, action: TodoAction): State {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: (action as SetVisibilityFilter).filter,
      }
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos
          .push({
            text: (action as AddTodo).text,
            completed: false,
          }),
      };
    case TOGGLE_TODO:
      return { 
        ...state,
        todos: state.todos
          .update(
            (action as ToggleTodo).index,
            todo => ({
              text: todo.text,
              completed: !todo.completed,
            }),
          )
      };
    default:
      return state;
  }
}
