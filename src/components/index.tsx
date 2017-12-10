import { createStore } from 'redux';
import reducer, { initialState, State } from './reducer';

// createStore(reducer: Reducer<State>, initialState?: State, [enhancer])
export const store = createStore<State>(reducer, initialState);
