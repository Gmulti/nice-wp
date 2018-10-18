import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { posts } from './posts'
const moduleReducers = combineReducers({
    posts,
    routing: routerReducer
})

const epics = []

export default {
    reducers: moduleReducers,
    epics: epics
}
