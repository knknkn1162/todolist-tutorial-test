import { addTodo, setVisibilityFilter, toggleTodo ,VisibilityFilter } from './actions';
import { store } from './index';
import { initialState, State, todoApp } from './reducer';
import { List } from 'immutable';

it('test store.getState', () => {
  let state: State = store.getState();
  expect(state).toEqual(initialState);

  store.dispatch(addTodo('Learn about actions'));
  store.dispatch(addTodo('Learn about reducers'));

  state = store.getState();
  expect(state).toEqual(
    {
      todos: List(
        [{ completed: false, text: 'Learn about actions' },
         { completed: false, text: 'Learn about reducers' },
        ]),
      visibilityFilter: 'SHOW_ALL',
    },
  );

  store.dispatch(toggleTodo(0));
  store.dispatch(toggleTodo(1));

  state = store.getState();

  expect(state).toEqual(
    {
      todos: List(
        [{ completed: true, text: 'Learn about actions' },
         { completed: true, text: 'Learn about reducers' },
        ]),
      visibilityFilter: 'SHOW_ALL',
    },
  );

  store.dispatch(setVisibilityFilter(VisibilityFilter.SHOW_COMPLETED));

  state = store.getState();

  expect(state).toEqual(
    {
      todos: List(
        [{ completed: true, text: 'Learn about actions' },
          { completed: true, text: 'Learn about reducers' },
        ]),
      visibilityFilter: 'SHOW_COMPLETED',
    },
  );

});
