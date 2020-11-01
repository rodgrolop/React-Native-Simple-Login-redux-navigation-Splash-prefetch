import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import middleware from './middleware'

const initialState = {}

const composeEnhancers = compose(
    applyMiddleware(...middleware),
)

const store = createStore(rootReducer, initialState, composeEnhancers)

export default store