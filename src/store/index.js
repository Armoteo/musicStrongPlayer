import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { songListReducer } from './reducers/songList';
import {songListMiddleWare} from './middleWares/songListMiddleWare';

const rooReducer = combineReducers({
  songList: songListReducer
})



export default createStore(rooReducer, applyMiddleware(thunk, ...songListMiddleWare));