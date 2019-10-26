import {PHOTOS} from './actions';
import {PHOTO} from './actions';

const initialState = {
  photos: [],
  photo: [],
}
/*
  State updates
*/
function reducers(state = initialState, action) {
  console.log(state, action )
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
  default:
    return state
  }
}

export default reducers