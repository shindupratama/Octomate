import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from '../reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['login']
  }
   
const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer, {}, applyMiddleware(thunk));

let persistor = persistStore(store);

export {store, persistor};

// export default createStore(reducers, {}, applyMiddleware(thunk));