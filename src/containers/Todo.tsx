import { connect, Dispatch } from "react-redux";
import { toggleTodo, TodoAction } from "../actions";
import { Todo as TodoComponent, TodoProps } from "../components";

export interface StateFromProps {
  text: string;
  completed: boolean;
}

interface DispatchFromProps {
  onclick: () => void;
}

function mapStateToProps({ text, completed }: StateFromProps): StateFromProps {
  return {
    text: text,
    completed: completed,
  };
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): DispatchFromProps {
  return {
    onclick: () => {
      dispatch(toggleTodo(0));
    },
  };
}

// create TodoComponent
// React.ComponentClass<StateFromProps & DispatchFromProps> |
//    React.StatelessComponent<StateFromProps & DispatchFromProps>;
export default connect<StateFromProps, DispatchFromProps, void>(
  mapStateToProps,
  mapDispatchToProps,
)(TodoComponent);
