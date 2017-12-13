export interface Todo {
  completed: boolean;
  index: number;
  text: string;
}

export function initTodo(text: string, completed = false, index = 0): Todo {
  return {
    completed: completed,
    index: index,
    text: text,
  };
}

let nextTodoId = 0;

export function addTodo(text: string): Todo {
  return {
    completed: false,
    index: nextTodoId++,
    text: text,
  };
}
