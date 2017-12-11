import { connect, Dispatch } from "react-redux";
import { ToggleTodo, StateType, VisibilityFilter, TodoAction } from "../actions";
import * as TodoComponent from "../components";
import { State, Todo } from "../reducers";
import { List } from "immutable";

function getVisibleTodos({todos, visibilityFilter}: State): List<Todo> {
  switch (visibilityFilter) {
    case VisibilityFilter.SHOW_ACTIVATE:
      return todos.filter((t) => !t.completed).toList();
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter((t) => t.completed).toList();
    case VisibilityFilter.SHOW_ALL:
    default:
      return todos;
  }
}

function toggleTodo(index: number): ToggleTodo {
  return {
    index: index,
    type: StateType.TOGGLE_TODO,
  };
}

function mapStateToProps(state: State): TodoComponent.TodoListProps {
  return {
    todos: getVisibleTodos(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>) {
  return {
    onTodoClick: (idx: number) => {
      dispatch(toggleTodo(idx));
    },
  };
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoComponent.TodoList);

export default VisibleTodoList;
