import * as React from "react";

export interface TodoProps {
  text: string;
  completed: boolean;
  onclick?: () => void;
}

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
