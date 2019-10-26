// fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
//   .then(response => response.json())
//   .then(json => console.log(json))

export const getPhotos = () => {
  return new Promise( (resolve,reject) => {
    fetch('https://jsonplaceholder.typicode.com/photos').then((response) => {
      return response.json();
    }).then((json) => {
      resolve(json);
    })
  })
}
export const getPhoto = (id) => {
  return new Promise( (resolve,reject) => {
    fetch('https://jsonplaceholder.typicode.com/photos/' +id).then((response) => {
      return response.json();
    }).then((json) => {
      resolve(json);
    })
  })
}