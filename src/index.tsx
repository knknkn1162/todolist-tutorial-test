import * as React from "react";
import * as ReactDOM from "react-dom";

// wire up our props with our container
import { Provider } from "react-redux";
import { createStore } from "redux";
import { todo } from "./reducers/todo";
import { Todo, initTodo } from "./states";
// import { State } from "./reducers";
import App from "./App";

// createStore(reducer: Reducer<State>, initialState?: State, [enhancer])
export const store = createStore<Todo>(todo, initTodo("hello"));

// ReactDOM.render(element, container[, callback])
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
