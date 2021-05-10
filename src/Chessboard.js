import { useState } from "react";
import Piece from "./Piece.js";
import Tile from "./Tile.js"; 
 
let defaultBoard = [
  <Piece color="B" type='Rook' />, <Piece color="B" type='Knight' />, <Piece color="B" type='Bishop' />, <Piece color="B" type='King' />, <Piece color="B" type='Queen' />, <Piece color="B" type='Bishop' />, <Piece color="B" type='Knight' />, <Piece color="B" type='Rook' />,
  <Piece color="B" type='Pawn' />, <Piece color="B" type='Pawn' />, <Piece color="B" type='Pawn' />,<Piece color="B" type='Pawn' />, <Piece color="B" type='Pawn' />, <Piece color="B" type='Pawn' />, <Piece color="B" type='Pawn' />, <Piece color="B" type='Pawn' />,
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  <Piece color="W" type='Pawn' />, <Piece color="W" type='Pawn' />, <Piece color="W" type='Pawn' />, <Piece color="W" type='Pawn' />, <Piece color="W" type='Pawn' />, <Piece color="W" type='Pawn' />, <Piece color="W" type='Pawn' />, <Piece color="W" type='Pawn' />,
  <Piece color="W" type='Rook' />, <Piece color="W" type='Knight' />, <Piece color="W" type='Bishop' />, <Piece color="W" type='King' />, <Piece color="W" type='Queen' />, <Piece color="W" type='Bishop' />, <Piece color="W" type='Knight' />, <Piece color="W" type='Rook' />
];
// location = [0, 63]

export default function Chessboard(props) {
  let [board, setboard] = useState(defaultBoard);
  let handleMovePiece = function(from, to) {
    let newBoard = Array.from(board);
    let rook = newBoard[0];
    newBoard[0] = "";
    newBoard[8] = rook;
    setboard(newBoard);
  }
  return (
    <div>
      <button onClick={() => handleMovePiece(0, 8)}>move piece</button>
      <div class="flex_container">
        <Tile location='h1' color='red' piece={board[0]}/> 
        <Tile location='h2' color='blue' piece={board[1]}/> 
        <Tile location='h3' color='red' piece={board[2]}/> 
        <Tile location='h4' color='blue' piece={board[3]}/> 
        <Tile location='h5' color='red' piece={board[4]}/> 
        <Tile location='h6' color='blue' piece={board[5]}/> 
        <Tile location='h7' color='red' piece={board[6]}/> 
        <Tile location='h8' color='blue' piece={board[7]}/> 
      </div> 

      <div class="flex_container">
        <Tile location='g1' color='blue' piece={board[8]}/> 
        <Tile location='g2' color='red' piece={board[9]}/> 
        <Tile location='g3' color='blue' piece={board[10]}/> 
        <Tile location='g4' color='red' piece={board[11]}/> 
        <Tile location='g5' color='blue' piece={board[12]}/> 
        <Tile location='g6' color='red' piece={board[13]}/> 
        <Tile location='g7' color='blue' piece={board[14]}/> 
        <Tile location='g8' color='red' piece={board[15]}/>  
      </div>

      <div class="flex_container">
        <Tile location='f1' color='red' piece={board[16]}/> 
        <Tile location='f2' color='blue' piece={board[17]}/> 
        <Tile location='f3' color='red' piece={board[17]}/> 
        <Tile location='f4' color='blue' piece={board[18]}/> 
        <Tile location='f5' color='red' piece={board[19]}/> 
        <Tile location='f6' color='blue' piece={board[20]}/> 
        <Tile location='f7' color='red' piece={board[21]}/> 
        <Tile location='f8' color='blue' piece={board[22]}/>  
      </div>

      <div class="flex_container">
        <Tile location='e1' color='blue' piece={board[23]}/> 
        <Tile location='e2' color='red' piece={board[24]}/> 
        <Tile location='e3' color='blue' piece={board[25]}/> 
        <Tile location='e4' color='red' piece={board[26]}/> 
        <Tile location='e5' color='blue' piece={board[27]}/>
        <Tile location='e6' color='red' piece={board[28]}/> 
        <Tile location='e7' color='blue' piece={board[29]}/> 
        <Tile location='e8' color='red' piece={board[30]}/>  
      </div>

      <div class="flex_container">
        <Tile location='d1' color='red' piece=''/> 
        <Tile location='d2' color='blue' piece=''/> 
        <Tile location='d3' color='red' piece=''/> 
        <Tile location='d4' color='blue' piece=''/> 
        <Tile location='d5' color='red' piece=''/> 
        <Tile location='d6' color='blue' piece=''/> 
        <Tile location='d7' color='red' piece=''/> 
        <Tile location='d8' color='blue' piece=''/>  
      </div>

      <div class="flex_container">
        <Tile location='c1' color='blue' piece=''/> 
        <Tile location='c2' color='red' piece=''/> 
        <Tile location='c3' color='blue' piece=''/> 
        <Tile location='c4' color='red' piece=''/> 
        <Tile location='c5' color='blue' piece=''/> 
        <Tile location='c6' color='red' piece=''/> 
        <Tile location='c7' color='blue' piece=''/> 
        <Tile location='c8' color='red' piece=''/>  
      </div>

      <div class="flex_container">
        <Tile location='b1' color='red' piece={board [48]}/> 
        <Tile location='b2' color='blue' piece={board [49]}/> 
        <Tile location='b3' color='red' piece={board [50]}/> 
        <Tile location='b4' color='blue' piece={board [51]}/> 
        <Tile location='b5' color='red' piece={board [52]}/> 
        <Tile location='b6' color='blue' piece={board [53]}/> 
        <Tile location='b7' color='red' piece={board [54]}/> 
        <Tile location='b8' color='blue' piece={board [55]}/> 
      </div>
        
      <div class="flex_container">
        <Tile location='a1' color='blue' piece={board [56]}/> 
        <Tile location='a2' color='red' piece={board [57]}/> 
        <Tile location='a3' color='blue' piece={board [58]}/> 
        <Tile location='a4' color='red' piece={board[59]}/> 
        <Tile location='a5' color='blue' piece={board [60]}/> 
        <Tile location='a6' color='red' piece={board [61]}/> 
        <Tile location='a7' color='blue' piece={board [62]}/> 
        <Tile location='a8' color='red' piece={board [63]}/>
      </div>
    </div>
  );
}
