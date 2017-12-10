import { addTodo, toggleTodo, setVisibilityFilter, VISIBILITY_FILTERS} from './actions';
import { State, initialState } from './reducers';
import { store } from './index';


it('dd', () => {
  const state: State = store.getState();
  const expectedState = initialState;

  expect(state).toEqual(expectedState);
})