export default function WelcomeScreen({ onStart }) {
  return (
    <div>
      <h1>Whack-A-Mole!</h1>
      <p>Click the mole when it appears to score points!</p>
      <button onClick={onStart}>START</button>
    </div>
  );
}
