import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  const [gameSetUp, setGameSetUp] = useState(false);
  const [fadeBackground, setFadeBackground] = useState(false);

  function beginGameSetup() {
    setFadeBackground(!fadeBackground)
    setTimeout(() => {
      setGameSetUp(!gameSetUp);
    }, 500);
  };

  return (
    <>
      <Menu gameSetUp={gameSetUp} beginGameSetup={beginGameSetup} fadeBackground={fadeBackground}/>
    </>
  );
}

export default App;
