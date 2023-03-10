import { FormEvent } from "react";
export interface TaskInterface {
  id: string;
  isValidate: number | boolean;
  label: string;
  order: number;
  uid: number | string;
}
export interface propsTaskInterface extends TaskInterface {
  onClickValidate: (index: number) => void;
  onClickDelete: (index: number) => void;
  index: number;
}
export interface propsFormInterface {
  onSubmitAddTask: (e: FormEvent) => void;
}
