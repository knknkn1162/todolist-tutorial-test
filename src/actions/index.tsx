export enum StateType {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER",
}

export enum VisibilityFilter {
  SHOW_ALL= "SHOW_ALL",
  SHOW_COMPLETED= "SHOW_COMPLETED",
  SHOW_ACTIVATE= "SHOW_ACTIVE",
}

export interface AddTodoAction {
  index: number;
  text: string;
  type: StateType.ADD_TODO;
}

export interface ToggleTodoAction {
  type: StateType.TOGGLE_TODO;
}

export interface SetVisibilityFilterAction {
  filter: VisibilityFilter;
  type: StateType.SET_VISIBILITY_FILTER;
}

export type TodoAction = AddTodoAction | ToggleTodoAction | SetVisibilityFilterAction;

let nextIdx: number = 0;

export function addTodo(text: string): AddTodoAction {
  return {
    type: StateType.ADD_TODO,
    index: nextIdx++,
    text: text,
  };
}

export function toggleTodo(): ToggleTodoAction {
  return {
    type: StateType.TOGGLE_TODO,
  };
}

export function setVisibilityFilter(filter: VisibilityFilter): SetVisibilityFilterAction {
  return {
    filter: filter,
    type: StateType.SET_VISIBILITY_FILTER,
  };
}
