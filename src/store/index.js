import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { songListReducer } from './reducers/songList';
import { controlPLayerReducer } from './reducers/controlPLayerReducer';
import { songListMiddleWare } from './middleWares/songListMiddleWare';
import { listStationMiddleWare } from './middleWares/listStationMiddleWare';
import { listStationReducer } from './reducers/listStationReducer';


const rooReducer = combineReducers({
  songList: songListReducer,
  controlState: controlPLayerReducer,
  listStation: listStationReducer
})



export default createStore(rooReducer, applyMiddleware(thunk, ...songListMiddleWare, ...listStationMiddleWare));