import { addTodo, setVisibilityFilter, toggleTodo ,VisibilityFilter } from './actions';
import { store } from './index';
import { initialState, State, todoApp } from './reducer';

it('test store.getState', () => {
  const state: State = store.getState();
  const expectedState = initialState;
  expect(state).toEqual(expectedState);
});
