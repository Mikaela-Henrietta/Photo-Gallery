
export const getPhotos = () => {
  return new Promise( (resolve) => {
    fetch('https://jsonplaceholder.typicode.com/photos').then((response) => {
      // response headers
      return response.json();
    }).then((json) => {
      resolve(json);
    })
  })
}
export const getPhotoById = (id) => {
  return new Promise( (resolve) => {
    fetch('https://jsonplaceholder.typicode.com/photos/' +id).then((response) => {
      return response.json()
    }).then((json) => {
      resolve(json);
    })
  })
}


