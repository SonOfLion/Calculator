import { createStore } from 'redux';
import numberReducer from './components/operations/calculator.reducer';

const store = createStore(numberReducer);

export default store;