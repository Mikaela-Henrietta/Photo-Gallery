import {PHOTOS, CLEAR_PHOTO} from './actions';
import {PHOTO} from './actions';

const initialState = {
  photos: [],
  photo: [],
}
/*
  State updates
*/
function reducers(state = initialState, action) {
  switch (action.type) {
    case PHOTOS:
    return {
      ...state,
      photos: action.photos
    }
    case PHOTO:
    return {
      ...state,
      photo: action.photo
    }
    case CLEAR_PHOTO:
      return {
        ...state,
        photo: null
      }
    default:
      return state
  }
}

export default reducers