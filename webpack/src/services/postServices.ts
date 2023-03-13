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
export function addPost() {
  return fetch("http://localhost:3000/posts",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ "title": "Planche à voile", "author": "Raymonde" })
    })
    .then(function (res) { 
      console.log(res.status);
      return res.json();
     })
     .then(data => {
      console.log(`data récupérée :`, data);
     })
    .catch(function (res) { console.log(res) })
}