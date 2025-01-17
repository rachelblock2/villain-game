import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  const [gameSetUp, setGameSetUp] = useState(true);

  function beginGameSetup() {
    setGameSetUp(!gameSetUp);
  };

  return (
    <>
      <Menu gameSetUp={gameSetUp} beginGameSetup={beginGameSetup} />
    </>
  );
}

export default App;
