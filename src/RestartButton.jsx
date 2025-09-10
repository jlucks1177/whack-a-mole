import { useGame } from "./GameContext";

export default function RestartButton() {
  const { restartGame } = useGame();

  return <button onClick={restartGame}>Restart!</button>;
}
