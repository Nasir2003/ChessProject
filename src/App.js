import "./styles.css"; 
import Chessboard from "./Chessboard.js";
import Timer from "./Timer.js";

export default function App() {
  return (
    <div className="App">
      <Chessboard />
      <Timer />
    </div>
  );
}
