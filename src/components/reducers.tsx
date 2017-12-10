import { VISIBILITY_FILTERS, TodoAction } from './actions';
import {List, Seq} from 'immutable';
import {ADD_TODO, AddTodo,
   TOGGLE_TODO, ToggleTodo,
    SET_VISIBILITY_FILTER, SetVisibilityFilter} from './actions';

import { combineReducers, Reducer } from 'redux';

export interface Todo {
  text: string;
  completed: boolean;
}

export interface State {
  visibilityFilter: VISIBILITY_FILTERS;
  todos: List<Todo>;
}

// note that State can't be **immutable** so, set const.
export const initialState: State = {
  visibilityFilter: VISIBILITY_FILTERS.SHOW_ALL,
  todos: List(),
}

// reducers that might change visibilityFilter 
// and returns the VISIBILITY_FILTERS object that the **new** state consists of.
function visibilityFilter(state: VISIBILITY_FILTERS, action: TodoAction): VISIBILITY_FILTERS {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return (action as SetVisibilityFilter).filter;
    default:
      return state;
  }
}

// reducers that might change Todos
// and returns the List<Todo> that the **new** state consists of.
function todos(state: List<Todo>, action: TodoAction): List<Todo> {
  switch(action.type) {
    case ADD_TODO:
      return state.push({
        text: (action as AddTodo).text,
        completed: false,
      })
    case TOGGLE_TODO:
      return state.update(
        (action as ToggleTodo).index,
        todo => ({
          ...todo,
          completed: !todo.completed,
        })
      )
  }
}

// type Reducer<S, A> = (state: S, action: A) => S
export const todoApp: Reducer<State> = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;