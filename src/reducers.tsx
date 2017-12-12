import { List } from "immutable";
import { StateType, VisibilityFilter } from "./actions";
import { TodoAction } from "./actions";
import { combineReducers, Reducer } from "redux";

export interface Todo {
  completed: boolean;
  index: number;
  text: string;
}

export interface State {
  visibilityFilter: VisibilityFilter;
  todos: List<Todo>;
}

export function initTodo(text: string, completed = false, index = 0): Todo {
  return {
    completed: completed,
    index: index,
    text: text,
  };
}

// note that State can't be **immutable** so, set const.
export const initialState: State = {
  visibilityFilter: VisibilityFilter.SHOW_ALL,
  todos: List<Todo>(),
};


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

/*
// reducers that might change visibilityFilter
// and returns the VISIBILITY_FILTERS object that the **new** state consists of.
// **SET INITIAL STATE**
function filters(state = VisibilityFilter.SHOW_ALL, action: TodoAction): VisibilityFilter {
  switch (action.type) {
    case StateType.SET_VISIBILITY_FILTER:
      return action.filter; // action as VisibilityFilter
    default:
      return state;
  }
}

// reducers that might change Todos
// and returns the List<Todo> that the **new** state consists of.
// **SET INITIAL STATE**
function todos(state = List<Todo>(), action: TodoAction): List<Todo> {
  switch (action.type) {
    case StateType.ADD_TODO:
      return state.push({
        index: action.index,
        text: action.text,
        completed: false,
      });
    case StateType.TOGGLE_TODO:
      return state.update(
        action.index,
        (todo) => ({
          ...todo,
          completed: !todo.completed,
        }),
      );
    default:
      return state;
  }
}

// type Reducer<S, A> = (state: S, action: A) => S
export const todoApp = combineReducers<State>({
  visibilityFilter: filters,
  todos: todos,
});

export default todoApp;
*/
