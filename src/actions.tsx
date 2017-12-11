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

export interface AddTodo {
  index: number;
  text: string;
  type: StateType.ADD_TODO;
}

export interface ToggleTodo {
  index: number;
  type: StateType.TOGGLE_TODO;
}

export interface SetVisibilityFilter {
  filter: VisibilityFilter;
  type: StateType.SET_VISIBILITY_FILTER;
}

// implement `type` attribute
export type TodoAction = AddTodo | ToggleTodo | SetVisibilityFilter;
