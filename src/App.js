import "./styles.css";
import Chessboard from "./Chessboard.js"
import Piece from "./Piece.js";
import "./Timer.js";

export default function App() {
  return ( 
    <div className="App"> 
      <Chessboard /> 
      <Piece />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );  
}
