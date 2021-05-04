import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'

import { history } from './utils/history'
import rootSaga from './saga'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  routerMiddleware(history),
  sagaMiddleware,
]
const isUsedReduxDevTool = process.env.REACT_APP_NODE_ENV === 'development'
const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: isUsedReduxDevTool,
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
export default store
