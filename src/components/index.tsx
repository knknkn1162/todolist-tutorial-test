import { createStore } from 'redux';
import todoApp from './reducers';
import { State, initialState } from './reducers';



// createStore(reducer: Reducer<State>, initialState?: State, [enhancer])
export const store = createStore<State>(todoApp, initialState);