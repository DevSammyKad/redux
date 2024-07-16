import changeTheNumber from '../reducers/upDown';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  changeTheNumber,
});

export default rootReducer;
