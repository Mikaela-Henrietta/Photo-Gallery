import {getPhotos, getPhoto} from '../api/photoApi';

//action types
export const PHOTOS = 'PHOTOS'
export const PHOTO = 'PHOTO'

//actions
export function getPhotosAction() {
  return dispatch => getPhotos().then((photos) => {
    console.log(photos)
    dispatch({ type: PHOTOS, photos });
  })
}

export function getPhotoAction(id) {
  return dispatch => getPhoto(id).then((photo) => {
    console.log(photo)
    dispatch({ type: PHOTO, photo });
  })
}