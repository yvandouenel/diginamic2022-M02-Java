function getToken() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        // cas favorable, retourne un token
        resolve("QSEECCdlodldoSZSGSSDZAZERTG");
      } else reject(new Error("Pb de Token"));
    },
      1000)
  });
}
function getUser(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        // cas favorable, retourne un token
        resolve({ login: "bob", uid: 123 });
      } else reject(new Error("Pb d'utilisateur"));
    },
      1000)
  });
}

/* getToken()
  .then((token) => {
    console.log(`token : `, token);
    return getUser(token);
  })
  .then((user) => {
    console.log(`user : `, user);
  })
  .catch(error => {
    console.error(`Erreur attrapée : `, error);
  }); */

async function getTokenUser() {
  try {
    const token = await getToken();
    const user = await getUser(token);
    // si j'execute ce code, c'est que les 2 promesses ont été tenues
    console.log(`token`, token);
    console.log(`user`, user);
  } catch (error) {
    console.error(`Erreur attrapée dans getTokenUser : `, error);
  }
}
getTokenUser();