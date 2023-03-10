import { TaskInterface } from "../interfaces/TaskInterface";
import tasks from "./../mocks/tasks.json";

export function getTasks():Promise<TaskInterface[]> {
  return new Promise(resolve => resolve(tasks))
}