import { List } from 'immutable';
/*
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER }
  ADD_TODO,
  SET_VISIBILITY_FILTER, AddTodo,
  SetVisibilityFilter,
  TodoAction,
  TOGGLE_TODO, ToggleTodo,
  VisibilityFilter,
} from './actions';
*/
import { StateType, VisibilityFilter } from './actions';
import { TodoAction, AddTodo, ToggleTodo, SetVisibilityFilter } from './actions';

import { combineReducers, Reducer } from 'redux';

export interface Todo {
  text: string;
  completed: boolean;
}

export interface State {
  visibilityFilter: VisibilityFilter;
  todos: List<Todo>;
}

// note that State can't be **immutable** so, set const.
export const initialState: State = {
  visibilityFilter: VisibilityFilter.SHOW_ALL,
  todos: List<Todo>(),
};

// reducers that might change visibilityFilter
// and returns the VISIBILITY_FILTERS object that the **new** state consists of.
// **SET INITIAL STATE**
function filters(state = VisibilityFilter.SHOW_ALL, action: TodoAction): VisibilityFilter {
  switch (action.type) {
    case StateType.SET_VISIBILITY_FILTER:
      return (action as SetVisibilityFilter).filter;
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
        text: (action as AddTodo).text,
        completed: false,
      });
    case StateType.TOGGLE_TODO:
      return state.update(
        (action as ToggleTodo).index,
        todo => ({
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
