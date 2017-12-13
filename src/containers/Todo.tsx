import { connect, Dispatch } from "react-redux";
import { toggleTodo, TodoAction } from "../actions";
import TodoComponent from "../components/Todo";
import { TodoProps } from "../components/Todo";

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
      dispatch(toggleTodo());
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
