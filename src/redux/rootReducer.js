import { combineReducers } from 'redux';
import AdminReducer from './admin/reducer';
const rootReducer = combineReducers({
  AdminReducer: AdminReducer
});

export default rootReducer;
