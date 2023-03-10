import {PropsCounter} from "../interfaces/PropsCounter"
const Counter = (props:PropsCounter):JSX.Element => {
  return (
    <button>{props.num}</button>
  );
}

export default Counter;