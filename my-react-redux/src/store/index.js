import { createStore } from 'redux'
import { reducers } from './profile/reducers'

export const store = createStore(reducers)