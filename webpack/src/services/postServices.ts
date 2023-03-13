export function getPosts() {
  return fetch("http://localhost:3000/posts")
    .then(response => {
      console.log(`response status`, response.status);
      return response.json();
    })
    .then(data => {
      console.log(`data : `, data);
      return data;
    })
    .catch(error => {
      console.log(`erreur attrapée : `, error);
    })
}