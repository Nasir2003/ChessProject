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
    // TODO: Check if from and to are value numbers [0 - 63].

    let newBoard = Array.from(board);
    let piece = newBoard[from];
    newBoard[from] = "";
    newBoard[to] = piece;
    setboard(newBoard);

    // TODO: set source and destination back to -1
    setSource(-1)
    setDestination(-1)
  };

  // TODO: Call handleMovePiece(source, destination) once
  // the destination state variable is set!

  let handleTileClick = function(tileNumber) {
    // if source is -1, set source state to tileNumber and return true
    if (source === -1){
      setSource(tileNumber);
      return true;
    }
    // else if destination is -1, set destination state to tileNumber and return true
    else if (destination === -1){
      setDestination(tileNumber);
      handleMovePiece(source, tileNumber)
      return true;
    }
    // otherwise, do nothing and return false
    else{
      //nothing lol
      return false;
    }
  };

  let getMoveMode = function(tileNumber) {
    // if source is equal to tileNumber, return true
    if (source === tileNumber){
      return true
    }
    // (or) if destination is equal to tileNumber, return true
    if (destination === tileNumber){
      return true
    }
    return false
  }

  return (
    <div>
      <div class="flex_container">
        <Tile location='h1' color='red' piece={board[0]} isMoveMode={getMoveMode(0)} onTileClick={() => handleTileClick(0)} /> 
        <Tile location='h2' color='blue' piece={board[1]} isMoveMode={getMoveMode(1)} onTileClick={() => handleTileClick(1)}/> 
        <Tile location='h3' color='red' piece={board[2]} isMoveMode={getMoveMode(2)} onTileClick={() => handleTileClick(2)}/> 
        <Tile location='h4' color='blue' piece={board[3]} isMoveMode={getMoveMode(3)} onTileClick={() => handleTileClick(3)}/> 
        <Tile location='h5' color='red' piece={board[4]} isMoveMode={getMoveMode(4)} onTileClick={() => handleTileClick(4)}/> 
        <Tile location='h6' color='blue' piece={board[5]} isMoveMode={getMoveMode(5)} onTileClick={() => handleTileClick(5)}/> 
        <Tile location='h7' color='red' piece={board[6]} isMoveMode={getMoveMode(6)} onTileClick={() => handleTileClick(6)}/> 
        <Tile location='h8' color='blue' piece={board[7]} isMoveMode={getMoveMode(7)} onTileClick={() => handleTileClick(7)}/> 
      </div> 

      <div class="flex_container">
        <Tile location='g1' color='blue' piece={board[8]} isMoveMode={getMoveMode(8)} onTileClick={() => handleTileClick(8)}/> 
        <Tile location='g2' color='red' piece={board[9]} isMoveMode={getMoveMode(9)} onTileClick={() => handleTileClick(9)}/> 
        <Tile location='g3' color='blue' piece={board[10]} isMoveMode={getMoveMode(10)} onTileClick={() => handleTileClick(10)}/> 
        <Tile location='g4' color='red' piece={board[11]} isMoveMode={getMoveMode(11)} onTileClick={() => handleTileClick(11)}/> 
        <Tile location='g5' color='blue' piece={board[12]} isMoveMode={getMoveMode(12)} onTileClick={() => handleTileClick(12)}/> 
        <Tile location='g6' color='red' piece={board[13]} isMoveMode={getMoveMode(13)} onTileClick={() => handleTileClick(13)}/> 
        <Tile location='g7' color='blue' piece={board[14]} isMoveMode={getMoveMode(14)} onTileClick={() => handleTileClick(14)}/> 
        <Tile location='g8' color='red' piece={board[15]} isMoveMode={getMoveMode(15)} onTileClick={() => handleTileClick(15)}/>  
      </div>

      <div class="flex_container">
        <Tile location='f1' color='red' piece={board[16]} isMoveMode={getMoveMode(16)} onTileClick={() => handleTileClick(16)}/> 
        <Tile location='f2' color='blue' piece={board[17]} isMoveMode={getMoveMode(17)} onTileClick={() => handleTileClick(17)}/> 
        <Tile location='f3' color='red' piece={board[18]} isMoveMode={getMoveMode(18)} onTileClick={() => handleTileClick(18)}/> 
        <Tile location='f4' color='blue' piece={board[19]} isMoveMode={getMoveMode(19)} onTileClick={() => handleTileClick(19)}/> 
        <Tile location='f5' color='red' piece={board[20]} isMoveMode={getMoveMode(20)} onTileClick={() => handleTileClick(20)}/> 
        <Tile location='f6' color='blue' piece={board[21]} isMoveMode={getMoveMode(21)} onTileClick={() => handleTileClick(21)}/>
        <Tile location='f7' color='red' piece={board[22]} isMoveMode={getMoveMode(22)} onTileClick={() => handleTileClick(22)}/> 
        <Tile location='f8' color='blue' piece={board[23]} isMoveMode={getMoveMode(23)} onTileClick={() => handleTileClick(23)}/>
      </div>

      <div class="flex_container">
        <Tile location='e1' color='blue' piece={board[24]} isMoveMode={getMoveMode(24)} onTileClick={() => handleTileClick(24)}/> 
        <Tile location='e2' color='red' piece={board[25]} isMoveMode={getMoveMode(25)} onTileClick={() => handleTileClick(25)}/> 
        <Tile location='e3' color='blue' piece={board[26]} isMoveMode={getMoveMode(26)} onTileClick={() => handleTileClick(26)}/> 
        <Tile location='e4' color='red' piece={board[27]} isMoveMode={getMoveMode(27)} onTileClick={() => handleTileClick(27)}/> 
        <Tile location='e5' color='blue' piece={board[28]} isMoveMode={getMoveMode(28)} onTileClick={() => handleTileClick(28)}/>
        <Tile location='e6' color='red' piece={board[29]} isMoveMode={getMoveMode(29)} onTileClick={() => handleTileClick(29)}/> 
        <Tile location='e7' color='blue' piece={board[30]} isMoveMode={getMoveMode(30)} onTileClick={() => handleTileClick(30)}/> 
        <Tile location='e8' color='red' piece={board[31]} isMoveMode={getMoveMode(31)} onTileClick={() => handleTileClick(31)}/>  
      </div>

      <div class="flex_container">
        <Tile location='d1' color='red' piece={board[32]} isMoveMode={getMoveMode(32)} onTileClick={() => handleTileClick(32)}/> 
        <Tile location='d2' color='blue' piece={board[33]} isMoveMode={getMoveMode(33)} onTileClick={() => handleTileClick(33)}/> 
        <Tile location='d3' color='red' piece={board[34]} isMoveMode={getMoveMode(34)} onTileClick={() => handleTileClick(34)}/> 
        <Tile location='d4' color='blue' piece={board[35]} isMoveMode={getMoveMode(35)} onTileClick={() => handleTileClick(35)}/> 
        <Tile location='d5' color='red' piece={board[36]} isMoveMode={getMoveMode(36)} onTileClick={() => handleTileClick(36)}/> 
        <Tile location='d6' color='blue' piece={board[37]} isMoveMode={getMoveMode(37)} onTileClick={() => handleTileClick(37)}/> 
        <Tile location='d7' color='red' piece={board[38]} isMoveMode={getMoveMode(38)} onTileClick={() => handleTileClick(38)}/> 
        <Tile location='d8' color='blue' piece={board[39]} isMoveMode={getMoveMode(39)} onTileClick={() => handleTileClick(39)}/>  
      </div>

      <div class="flex_container">
        <Tile location='c1' color='blue' piece={board[40]} isMoveMode={getMoveMode(40)} onTileClick={() => handleTileClick(40)}/> 
        <Tile location='c2' color='red' piece={board[41]} isMoveMode={getMoveMode(41)} onTileClick={() => handleTileClick(41)}/> 
        <Tile location='c3' color='blue' piece={board[42]} isMoveMode={getMoveMode(42)} onTileClick={() => handleTileClick(42)}/> 
        <Tile location='c4' color='red' piece={board[43]} isMoveMode={getMoveMode(43)} onTileClick={() => handleTileClick(43)}/> 
        <Tile location='c5' color='blue' piece={board[44]} isMoveMode={getMoveMode(44)} onTileClick={() => handleTileClick(44)}/> 
        <Tile location='c6' color='red' piece={board[45]} isMoveMode={getMoveMode(45)} onTileClick={() => handleTileClick(45)}/> 
        <Tile location='c7' color='blue' piece={board[46]} isMoveMode={getMoveMode(46)} onTileClick={() => handleTileClick(46)}/> 
        <Tile location='c8' color='red' piece={board[47]} isMoveMode={getMoveMode(47)} onTileClick={() => handleTileClick(47)}/>  
      </div>

      <div class="flex_container">
        <Tile location='b1' color='red' piece={board[48]} isMoveMode={getMoveMode(48)} onTileClick={() => handleTileClick(48)}/>
        <Tile location='b2' color='blue' piece={board[49]} isMoveMode={getMoveMode(49)} onTileClick={() => handleTileClick(49)}/>
        <Tile location='b3' color='red' piece={board[50]} isMoveMode={getMoveMode(50)} onTileClick={() => handleTileClick(50)}/>
        <Tile location='b4' color='blue' piece={board[51]} isMoveMode={getMoveMode(51)} onTileClick={() => handleTileClick(51)}/>
        <Tile location='b5' color='red' piece={board[52]} isMoveMode={getMoveMode(52)} onTileClick={() => handleTileClick(52)}/>
        <Tile location='b6' color='blue' piece={board[53]} isMoveMode={getMoveMode(53)} onTileClick={() => handleTileClick(53)}/>
        <Tile location='b7' color='red' piece={board[54]} isMoveMode={getMoveMode(54)} onTileClick={() => handleTileClick(54)}/>
        <Tile location='b8' color='blue' piece={board[55]} isMoveMode={getMoveMode(55)} onTileClick={() => handleTileClick(55)}/>
      </div>
        
      <div class="flex_container">
        <Tile location='a1' color='blue' piece={board[56]} isMoveMode={getMoveMode(56)} onTileClick={() => handleTileClick(56)}/>
        <Tile location='a2' color='red' piece={board[57]} isMoveMode={getMoveMode(57)} onTileClick={() => handleTileClick(57)}/>
        <Tile location='a3' color='blue' piece={board[58]} isMoveMode={getMoveMode(58)} onTileClick={() => handleTileClick(58)}/>
        <Tile location='a4' color='red' piece={board[59]} isMoveMode={getMoveMode(59)} onTileClick={() => handleTileClick(59)}/>
        <Tile location='a5' color='blue' piece={board[60]} isMoveMode={getMoveMode(60)} onTileClick={() => handleTileClick(60)}/>
        <Tile location='a6' color='red' piece={board[61]} isMoveMode={getMoveMode(61)} onTileClick={() => handleTileClick(61)}/>
        <Tile location='a7' color='blue' piece={board[62]} isMoveMode={getMoveMode(62)} onTileClick={() => handleTileClick(62)}/>
        <Tile location='a8' color='red' piece={board[63]} isMoveMode={getMoveMode(63)} onTileClick={() => handleTileClick(63)}/>
      </div>
    </div>
  );
}
