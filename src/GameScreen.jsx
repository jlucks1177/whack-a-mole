import Hole from "./Hole.jsx";
import RestartButton from "./RestartButton";
import { useGame } from "./GameContext";

export default function GameScreen() {
  const { score } = useGame();

  return (
    <section>
      <div className="controls">
        <h2>Score: {score}</h2>
        <RestartButton />
      </div>
      <div className="hole-grid">
        <Hole></Hole>
        <Hole></Hole>
        <Hole></Hole>
        <Hole></Hole>
        <Hole></Hole>
        <Hole></Hole>
        <Hole></Hole>
        <Hole></Hole>
        <Hole></Hole>
      </div>
    </section>
  );
}
