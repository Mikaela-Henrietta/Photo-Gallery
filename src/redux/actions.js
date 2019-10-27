import {getPhotos, getPhotoById} from '../api/photoApi';

//action types
export const PHOTOS = 'PHOTOS'
export const PHOTO = 'PHOTO'
export const CLEAR_PHOTO = 'CLEAR_PHOTO'

//actions
export function getPhotosAction() {
  return dispatch => getPhotos().then((photos) => {
    dispatch({ type: PHOTOS, photos });
  })
}

export function getPhotoAction(id) {
  return dispatch => getPhotoById(id).then((photo) => {
    dispatch({ type: PHOTO, photo });
  })
}

export function clearPhotoAction() {
  return dispatch => dispatch({ type: CLEAR_PHOTO })
}