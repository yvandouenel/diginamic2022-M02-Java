import user from "./../mocks/user.json";
import { UserInterface } from './../models/User';
export function getUser():Promise<UserInterface> {
  return new Promise((resolve => resolve(user)))
}
