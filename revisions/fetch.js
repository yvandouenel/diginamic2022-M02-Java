/* fetch("https://www.coopernet.fr/session/token")
  .then((response) => {
    console.log(`response.status`, response.status);
    return response.text();// renvoie une promesse
  })
  .then((token) => {
    console.log(`token : `, token);
  })
  .catch(error => {
    console.error(`Erreur attrapée : `, error);
  }) */

async function getToken() {
  try {
    const response = await fetch("https://www.coopernet.fr/session/token");
    const token = await response.text();
    console.log(`token : `, token);
  } catch (error) {
    console.error(`Erreur attrapée dans getToken : `, error);
  }
}
getToken();