import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import modules from '../../reducers'

const siteBaseUrl = REACT_ENV.baseUrl
    .replace(['http://', 'https://'], '')
    .replace(window.location.origin.replace(['http://', 'https://'], ''), '')
const history = createBrowserHistory({ basename: siteBaseUrl })

const logger = createLogger({ collapsed: true })

const middlewares = []

middlewares.push(logger)

const initStore = (initialState = {}) => {
    const reduxMiddleware = composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(
        connectRouter(history)(modules.reducers),
        initialState,
        reduxMiddleware
    )

    return store
}

export default {
    history,
    initStore
}
