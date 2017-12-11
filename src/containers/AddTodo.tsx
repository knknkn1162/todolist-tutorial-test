import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { AddTodo } from "../actions";
import { AddTodoProps } from "../components";

export interface AddTodoProps {
  input: string;
  node: JSX.Element;
  onsubmit: () => void;
}

function Add({dispatch: dispatch}) {
  let input: HTMLInputElement;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch((input.value));
          input.value = "";
        }}
      >
        <input
          ref={(node) => { input = node; }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default connect()(Add);
