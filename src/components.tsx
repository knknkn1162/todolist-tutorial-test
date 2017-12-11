import * as React from "react";
import FilterLink from "./containers/FilterLink";
import {Todo as TodoType} from "./reducers";
import { List } from "immutable";
import { VisibilityFilter } from "./actions";

export interface LinkProps {
  active: boolean;
  children?: string;
  onclick?: () => void;
}

export interface TodoProps {
  text: string;
  completed: boolean;
  onclick: () => void;
}

export interface TodoListProps {
  todos: List<TodoType>;
  onTodoClick?: (idx: number) => void;
}

export interface AddTodoProps {
  input: string;
  node: JSX.Element;
  onsubmit: () => void;
}

/**
 * <Todo />
 */

export function Todo({ text, completed, onclick }: TodoProps): JSX.Element {
  return (
    <li
      onClick={onclick}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </li>
   );
}

/**
 *
 * <TodoList />
 */
export function TodoList({todos, onTodoClick}: TodoListProps): JSX.Element {
  return (
    <ul>
      {todos.map((todo) => <Todo key={todo.index} {...todo} onclick={() => onTodoClick(todo.index)} />).toArray()}
    </ul>
  );
}

/**
 * <Footer />
 */

export interface FooterOwnProps {
  filter: VisibilityFilter;
}

function flink(footer: FooterOwnProps, s: string): JSX.Element {
  return (
    <FilterLink filter={footer.filter}>{s}</FilterLink>
  );
}

export function Footer(): JSX.Element {
  return (
    <p>
      Show:
      {" "}
      {flink({filter: VisibilityFilter.SHOW_ALL}, "All")}
      {", "}
      {flink({filter: VisibilityFilter.SHOW_ACTIVATE}, "Active")}
      {", "}
      {flink({filter: VisibilityFilter.SHOW_COMPLETED}, "Completed")}
    </p>
  );
}

/**
 * <Link />
 */
export function Link({active, children, onclick}: LinkProps): JSX.Element {
  if (active) {
    return (<span>{children}</span>);
  }

  return (
    <a
      href=""
      onClick={onclick}
    >
      {children}
    </a>
  );
}
