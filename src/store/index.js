import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { songListReducer } from './reducers/songList';


const rooReducer = combineReducers({
  songList: songListReducer
})

export default createStore(rooReducer, applyMiddleware(thunk))