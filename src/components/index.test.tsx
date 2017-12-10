import { addTodo, setVisibilityFilter, toggleTodo ,VISIBILITY_FILTERS } from './actions';
import { store } from './index';
import { initialState, State } from './reducer';

it('dd', () => {
  const state: State = store.getState();
  const expectedState = initialState;

  expect(state).toEqual(expectedState);
});
