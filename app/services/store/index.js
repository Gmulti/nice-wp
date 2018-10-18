import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import modules from '../../reducers'

const middlewares = []

const logger = createLogger({ collapsed: true })
middlewares.push(logger)

export default function initStore(initialState = {}) {
    const reduxMiddleware = composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(modules.reducers, initialState, reduxMiddleware)

    return store
}
