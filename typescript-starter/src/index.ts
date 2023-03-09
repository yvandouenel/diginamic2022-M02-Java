import { getUser } from "./services/user";

console.log('Hello world');
// IFEES ou fonction anonyme immédiate
(async function(){
  const user = await getUser();
  console.log(`user : `, user);
})()