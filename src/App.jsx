import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleActivePlayer = () => [
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X",
    ),
  ];

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="0" />
        </ol>
        <GameBoard onSelectSqure={handleActivePlayer}/>
      </div>
      LOG
    </main>
  );
}

export default App;
