import { createStore } from 'redux'
import MobileStoreReducers from './MobileStoreReducers'

const Store = createStore(MobileStoreReducers)

export default Store