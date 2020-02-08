import {combineReducers, createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from'redux-devtools-extension'
import thunk from 'redux-thunk'
import user from '../reducers/user'
import cart from '../reducers/cart'

const rootReducer = combineReducers({user,cart})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store