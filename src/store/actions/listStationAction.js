import { SET_LIST_STATION, LOAD_STATION, WRITE_STATION } from '../types';

export const loadStation = () => ({
  type: LOAD_STATION
});

export const setListStation = (data) => ({
  type: SET_LIST_STATION,
  payload: data
});

export const setWriteStation = (data) => ({
  type: WRITE_STATION,
  payload: data
});