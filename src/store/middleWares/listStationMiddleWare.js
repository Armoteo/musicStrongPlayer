import { LOAD_STATION, WRITE_STATION } from '../types'
import { subscribe } from '../subscribe';
import SQLite from "react-native-sqlite-storage";

const fetchWorker = ({
  action,
  next,
  dispatch
}) => {

};

const fetchWorkerWrite = ({
  action,
  next,
  dispatch
}) => {

};


const fetchListStation = ({ dispatch }) => (next) =>
  subscribe(LOAD_STATION, fetchWorker)(next, dispatch);

const fetchListStationWrite = ({ dispatch }) => (next) =>
  subscribe(WRITE_STATION, fetchWorkerWrite)(next, dispatch);


export const listStationMiddleWare = [fetchListStation, fetchListStationWrite];