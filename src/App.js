import "./styles.css";
import Chessboard from "./Chessboard.js";
import Piece from "./Piece.js";
import "./Timer.js";

export default function App() {
  return (
    <div className="App">
      <Piece location="" color="" type="" is_active="" />
      <Chessboard />
      <Chessboard />
      # Nasir (Red)
      <Piece location="A1" color="Red Pawn 1" />
      <Piece location="A2" color="Red Pawn 2" />
      <Piece location="A3" color="Red Pawn 3" />
      <Piece location="A4" color="Red Pawn 4" />
      <Piece location="A5" color="Red Pawn 5" />
      <Piece location="A6" color="Red Pawn 6" />
      <Piece location="A7" color="Red Pawn 7" />
      <Piece location="A8" color="Red Pawn 8" />
      <Piece location="B1" color="Red Rook 1" />
      <Piece location="B2" color="Red Rook 2" />
      <Piece location="B3" color="Red Knight 1" />
      <Piece location="B4" color="Red Knight 2" />
      <Piece location="B5" color="Red Bishop 1" />
      <Piece location="B6" color="Red Bishop 2" />
      <Piece location="B7" color="Red King" />
      <Piece location="B8" color="Red Queen" />
      # Denny (Blue)
      <Piece location="0" color="blue" type="pawn 1" />
      <Piece location="0" color="blue pawn 2" />
      <Piece location="0" color="blue pawn 3" />
      <Piece location="0" color="blue pawn 4" />
      <Piece location="0" color="blue pawn 5" />
      <Piece location="0" color="blue pawn 6" />
      <Piece location="0" color="blue pawn 7" />
      <Piece location="0" color="blue pawn 8" />
      <Piece location="0" color="blue rook 1" />
      <Piece location="0" color="blue rook 2" />
      <Piece location="0" color="blue knight 1" />
      <Piece location="0" color="blue knight 2" />
      <Piece location="0" color="blue bishop 1" />
      <Piece location="0" color="blue bishop 2" />
      <Piece location="0" color="blue king" />
      <Piece location="0" color="blue queen" />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
