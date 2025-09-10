import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);

  function restartGame() {
    setIsPlaying(false);
    setScore(0);
  }

  const game = { isPlaying, setIsPlaying, score, setScore, restartGame };

  return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used within a GameProvider");
  return context;
}
