export const ADD_TODO = 'ADD_TODO';
export type ADD_TODO = typeof ADD_TODO;
export const TOGGLE_TODO = 'TOGGLE_TODO';
export type TOGGLE_TODO = typeof TOGGLE_TODO;
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export type SET_VISIBILITY_FILTER = typeof SET_VISIBILITY_FILTER;

// export type ACTION_TYPE = ADD_TODO | TOGGLE_TODO | SET_VISIBILITY_FILTER;

export enum VISIBILITY_FILTERS {
  SHOW_ALL= 'SHOW_ALL',
  SHOW_COMPLETED= 'SHOW_COMPLETED',
  SHOW_ACTIVATE= 'SHOW_ACTIVE',
}

export interface AddTodo {
  text: string;
  type: ADD_TODO;
}

export interface ToggleTodo {
  index: number;
  type: TOGGLE_TODO;
}

export interface SetVisibilityFilter {
  filter: VISIBILITY_FILTERS;
  type: SET_VISIBILITY_FILTER;
}

export type TodoAction = AddTodo | ToggleTodo | SetVisibilityFilter;

export function addTodo(text: string): AddTodo {
  return {
    text: text,
    type: ADD_TODO,
  };
}

export function toggleTodo(index: number): ToggleTodo {
  return {
    index: index,
    type: TOGGLE_TODO,
  };
}

export function setVisibilityFilter(filter: VISIBILITY_FILTERS): SetVisibilityFilter {
  return {
    filter: filter,
    type: SET_VISIBILITY_FILTER,
  };
}
