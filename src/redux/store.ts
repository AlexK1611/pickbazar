import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { interceptor } from '../axios/instance'
import { rootReducer } from './rootReducer'

export const store = createStore(rootReducer, applyMiddleware(thunk))
interceptor(store)