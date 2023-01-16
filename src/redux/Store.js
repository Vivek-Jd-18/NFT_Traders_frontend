import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';
// import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: localStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer); //persist reducer combine both local and root reducer
export default () => {
  let store = createStore(persistedReducer, {}); //apply middleware to run rootreducer
  let persistor = persistStore(store);
  return { store, persistor };
};
