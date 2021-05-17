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

  // source: integer 0 - 63, -1 means "not selected"
  let [source, setSource] = useState(-1);
  // destination: integer 0 - 63, -1 means "not selected"
  let [destination, setDestination] = useState(-1);

  let handleMovePiece = function(from, to) {
    let newBoard = Array.from(board);
    let piece = newBoard[0];
    newBoard[from] = "";
    newBoard[to] = piece;
    setboard(newBoard);
  };

  let handleTileClick = function(tileNumber) {
    // if source is -1, set source state to tileNumber and return true
    if (source === -1){
      setSource(tileNumber)
      return true
    }
    // else if destination is -1, set destination state to tileNumber and return true
    else if (destination === -1){
      setDestination(tileNumber)
      return true
    }
    // otherwise, do nothing and return false
    else{
      //nothing lol
      return false
    }
  };

  return (
    <div>
      <button onClick={() => handleMovePiece(source, destination)}>move piece</button>
      <div class="flex_container">
        <Tile location='h1' color='red' piece={board[0]}/> 
        <Tile location='h2' color='blue' piece={board[1]} onClick={() => handleTileClick(1)}/> 
        <Tile location='h3' color='red' piece={board[2]}/> 
        <Tile location='h4' color='blue' piece={board[3]}/> 
        <Tile location='h5' color='red' piece={board[4]}/> 
        <Tile location='h6' color='blue' piece={board[5]}/> 
        <Tile location='h7' color='red' piece={board[6]}/> 
        <Tile location='h8' color='blue' piece={board[7]}/> 
      </div> 

      <div class="flex_container">
        <Tile location='g1' color='blue' piece={board[8]} onClick={() => handleTileClick(8)}/> 
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
        <Tile location='f3' color='red' piece={board[18]}/> 
        <Tile location='f4' color='blue' piece={board[19]}/> 
        <Tile location='f5' color='red' piece={board[20]}/> 
        <Tile location='f6' color='blue' piece={board[21]}/> 
        <Tile location='f7' color='red' piece={board[22]}/> 
        <Tile location='f8' color='blue' piece={board[23]}/>  
      </div>

      <div class="flex_container">
        <Tile location='e1' color='blue' piece={board[24]}/> 
        <Tile location='e2' color='red' piece={board[25]}/> 
        <Tile location='e3' color='blue' piece={board[26]}/> 
        <Tile location='e4' color='red' piece={board[27]}/> 
        <Tile location='e5' color='blue' piece={board[28]}/>
        <Tile location='e6' color='red' piece={board[29]}/> 
        <Tile location='e7' color='blue' piece={board[30]}/> 
        <Tile location='e8' color='red' piece={board[31]}/>  
      </div>

      <div class="flex_container">
        <Tile location='d1' color='red' piece={board[32]}/> 
        <Tile location='d2' color='blue' piece={board[33]}/> 
        <Tile location='d3' color='red' piece={board[34]}/> 
        <Tile location='d4' color='blue' piece={board[35]}/> 
        <Tile location='d5' color='red' piece={board[36]}/> 
        <Tile location='d6' color='blue' piece={board[37]}/> 
        <Tile location='d7' color='red' piece={board[38]}/> 
        <Tile location='d8' color='blue' piece={board[39]}/>  
      </div>

      <div class="flex_container">
        <Tile location='c1' color='blue' piece={board[40]}/> 
        <Tile location='c2' color='red' piece={board[41]}/> 
        <Tile location='c3' color='blue' piece={board[42]}/> 
        <Tile location='c4' color='red' piece={board[43]}/> 
        <Tile location='c5' color='blue' piece={board[44]}/> 
        <Tile location='c6' color='red' piece={board[45]}/> 
        <Tile location='c7' color='blue' piece={board[46]}/> 
        <Tile location='c8' color='red' piece={board[47]}/>  
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
