import { useState, useEffect } from "react";
import { useGame } from "./GameContext";

export default function Hole() {
  const [isMoleVisible, setIsMoleVisible] = useState(false);
  const { score, setScore } = useGame();

  function handleWhack() {
    setScore(score + 1);
    setIsMoleVisible(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const shouldShow = Math.random() < 0.3;
      setIsMoleVisible(shouldShow);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hole">
      {isMoleVisible ? (
        <img src="/mole.png" onClick={handleWhack} />
      ) : (
        <img src="/hole.png" />
      )}
    </div>
  );
}
