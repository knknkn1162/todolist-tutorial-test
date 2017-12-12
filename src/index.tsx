import * as React from "react";
import * as ReactDOM from "react-dom";

// wire up our props with our container
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Todo, todo } from "./reducers";
import { State } from "./reducers";
import App from "./App";
import { addTodo } from "./actions";
import { StateFromProps } from "./containers/Todo";

// createStore(reducer: Reducer<State>, initialState?: State, [enhancer])
export const store = createStore<StateFromProps>(todo, {completed: false, text: "hello"});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
