import { useContext } from "react";
import { Context } from "../App"; // import du contexte
const Counter = () => {
  // Récupération des variables qui proviennent du contexte
  const [counter, onClickAdd, onClickSubtract] = useContext(Context);
  return (
    <div>
      {counter}
      <div>
        <button
          style={{
            fontSize: 26,
          }}
          onClick={onClickAdd}
        >
          +
        </button>
        <button
          style={{
            fontSize: 26,
          }}
          onClick={onClickSubtract}
        >
          -
        </button>
      </div>
    </div>
  );
};
export default Counter;
