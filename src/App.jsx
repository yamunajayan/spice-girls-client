import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <svg tabindex="-1" focusable="false" data-di-rand="1729193652193">
        <use tabindex="-1" focusable="false" xlink:href="#icon-bell-logo"></use>
      </svg>
    </>
  );
}

export default App;
