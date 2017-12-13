import * as React from "react";
import Todo from "./Todo";
import { List } from "immutable";
import { Todo as TodoState } from "../states";

export interface TodoListProps {
  todos: List<TodoState>;
  onTodoClick?: (idx: number) => void;
}

export function TodoList({todos, onTodoClick}: TodoListProps): JSX.Element {
  return (
    <ul>
      {todos.map((todo) => {
        const onclick: () => void = () => onTodoClick(todo.index);
        return (
          <Todo
            // help React to identify which items have changed, are added, or are removed.
            key={todo.index} // “key” is a special string attribute you need to include when using map function
            {...todo} // completed, index, text
            onclick={onclick}
          />);
        })
      }
    </ul>
  );
}

export default TodoList;
