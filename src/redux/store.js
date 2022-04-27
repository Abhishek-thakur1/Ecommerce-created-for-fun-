import { legacy_createStore as createStore } from "redux";
import reducers from './reducers/index.js'

const store = createStore(reducers,{})

export default store