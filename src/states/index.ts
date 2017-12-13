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
