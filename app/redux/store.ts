import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import { rtkQueryErrorLogger } from './middlewares/error.middleware'
import { reducers } from './root.reducer'

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	// you can add player if you need to persist player state
	whitelist: ['theme', 'language', 'auth']
}

const persistedReducer = persistReducer(persistConfig, reducers)
export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
			immutableCheck: false
		}).concat(rtkQueryErrorLogger)
})
export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof reducers>
