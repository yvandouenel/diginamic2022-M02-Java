export interface TaskInterface {
  id: string;
  isValidate: number | boolean;
  label: string;
  order: number,
  uid: number
}
export interface propsTaskInterface  extends TaskInterface{
  onClickValidate: (index:number) => void;
  index: number
}