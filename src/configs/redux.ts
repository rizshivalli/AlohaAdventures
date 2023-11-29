import {configureStore} from '@reduxjs/toolkit';
import Reactotron from 'reactotron-react-native';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@sagas/index';
import rootReducer from '@slices/index';

import {persistReducer, persistStore} from 'redux-persist';
import {reduxMmkvStorage} from '@configs/mmkv';

const sagaMonitor =
  __DEV__ && Reactotron.createSagaMonitor
    ? Reactotron.createSagaMonitor()
    : undefined;
let sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middleware = [sagaMiddleware];

const persistConfig = {
  key: 'root',
  storage: reduxMmkvStorage,
  blacklist: ['loading', 'error', 'currentSession'],
  debug: __DEV__, //to get useful logging};
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //   enhancers:
  //     __DEV__ && Reactotron.createEnhancer ? [Reactotron.createEnhancer()] : [],
  devTools: false,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(middleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
