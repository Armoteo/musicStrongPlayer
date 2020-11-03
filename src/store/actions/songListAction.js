import { LOAD_SONGS} from '../types'

export const loadCards = () => {
  return async dispatch => {
    const data = await DB.getData()
    dispatch({
      type: LOAD_SONGS,
      payload: data
    })
  }
}