import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {restaurantReducer} from '../reducers/restaurantReducer'
const reducers=combineReducers({

    restaurantList:restaurantReducer
})
const middlware=[thunk]

const store=createStore(reducers,applyMiddleware(...middlware))

export default store