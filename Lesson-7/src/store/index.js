import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { profileReducer } from './profile/reducer'
import { chatsReducer } from './chats/reducer'
import { messagesReducer } from './messages/reducer'

const rootReducer = combineReducers({
	profile: profileReducer,
	chats: chatsReducer,
	messages: messagesReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
	key: 'myMessenger',
	storage,
	blacklist: [''],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunk)),
)
export const persistor = persistStore(store)
