import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import associatesFormReducer from '../slices/associate.form.slice';
import associatesReducer from '../slices/associates.slices';
export default function configureAppStore(preloadedState) {
  const rootReducer = combineReducers({
    associates: associatesReducer,
    associatesForm: associatesFormReducer,
  });
  const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whitelist: ['associatesForm'], //to persist reducer data
    blacklist: ['associates'], //to remove reducer to persist
    debug: true, //to get useful logging
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware],
    preloadedState,
  });
  let persistor = persistStore(store);
  sagaMiddleware.run(sagas);
  return {store, persistor};
}
