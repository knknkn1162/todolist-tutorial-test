import { connect, Dispatch } from "react-redux";
import { ToggleTodo, StateType, VisibilityFilter, SetVisibilityFilter, TodoAction } from "../actions";
import * as TodoComponent from "../components";
import { State, Todo } from "../reducers";

function setVisibilityFilter(filter: VisibilityFilter): SetVisibilityFilter {
  return {
    filter: filter,
    type: StateType.SET_VISIBILITY_FILTER,
  };
}

function mapStateToProps(state: VisibilityFilter, ownProps: TodoComponent.FooterOwnProps): TodoComponent.LinkProps {
  return {
    active: ownProps.filter === state,
  };
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>, ownProps: TodoComponent.FooterOwnProps) {
  return {
    onclick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
}

// Link: LinkProps => JSX.Element
// FilterLink container renders a Link
const FilterLink: React.ComponentClass<TodoComponent.FooterOwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoComponent.Link);

export default FilterLink;
