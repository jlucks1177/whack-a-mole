import WelcomeScreen from "./WelcomeScreen";
import GameScreen from "./GameScreen";
import { useGame } from "./GameContext";

export default function App() {
  const { isPlaying, setIsPlaying } = useGame();
  return isPlaying ? (
    <GameScreen />
  ) : (
    <WelcomeScreen onStart={() => setIsPlaying(true)} />
  );
}
