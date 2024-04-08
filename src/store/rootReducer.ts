import AsyncStorage from '@react-native-async-storage/async-storage';
import {appCommonReducer} from '@store/modules/AppCommon/reducer';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 120000,
  whitelist: [],
};

const rootReducer = combineReducers({
  appCommon: appCommonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
