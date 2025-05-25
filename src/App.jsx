import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const counter = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + action.payload };
      case "decrement":
        return { count: state.count - action.payload };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, counter);

  return (
    <>
      <div>
        <h1>useState()</h1>
        {count}
        <div className="card">
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>

      <hr />
      <div>
        <h1>useReducer()</h1>
        {state.count}
        <div className="card">
          <button
            onClick={() => dispatch({ type: "decrement", payload: count })}
          >
            -
          </button>
          <button
            onClick={() => dispatch({ type: "increment", payload: count })}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
