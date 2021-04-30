import Piece from "./Piece.js";
import Tile from "./Tile.js";

let board = [
  ["0", "1", "2", "3", "4", "5", "6", "7"],
  ["8", "9", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"]
];
// location = [0, 63]

export default function Chessboard(props) {
  let html = "";
  for (let indiv of board) {
    html += "<div>" + { indiv } + "</div>";
  }
  return (
    <div>
      
      <div class="flex_container">
        <Tile location='h1' color='red' piece={<Piece color="B" type='Rook' />}/> 
        <Tile location='h2' color='blue' piece={<Piece color="B" type='Knight' />}/> 
        <Tile location='h3' color='red' piece={<Piece color="B" type='Bishop' />}/> 
        <Tile location='h4' color='blue' piece={<Piece color="B" type='King' />}/> 
        <Tile location='h5' color='red' piece={<Piece color="B" type='Queen' />}/> 
        <Tile location='h6' color='blue' piece={<Piece color="B" type='Bishop' />}/> 
        <Tile location='h7' color='red' piece={<Piece color="B" type='Knight' />}/> 
        <Tile location='h8' color='blue' piece={<Piece color="B" type='Rook' />}/> 
      </div> 

      <div class="flex_container">
        <Tile location='g1' color='blue' piece={<Piece color="B" type='Pawn' />}/> 
        <Tile location='g2' color='red' piece={<Piece color="B" type='Pawn' />}/> 
        <Tile location='g3' color='blue' piece={<Piece color="B" type='Pawn' />}/> 
        <Tile location='g4' color='red' piece={<Piece color="B" type='Pawn' />}/> 
        <Tile location='g5' color='blue' piece={<Piece color="B" type='Pawn' />}/> 
        <Tile location='g6' color='red' piece={<Piece color="B" type='Pawn' />}/> 
        <Tile location='g7' color='blue' piece={<Piece color="B" type='Pawn' />}/> 
        <Tile location='g8' color='red' piece={<Piece color="B" type='Pawn' />}/>  
      </div>

      <div class="flex_container">
        <Tile location='f1' color='red' piece=''/> 
        <Tile location='f2' color='blue' piece=''/> 
        <Tile location='f3' color='red' piece=''/> 
        <Tile location='f4' color='blue' piece=''/> 
        <Tile location='f5' color='red' piece=''/> 
        <Tile location='f6' color='blue' piece=''/> 
        <Tile location='f7' color='red' piece=''/> 
        <Tile location='f8' color='blue' piece=''/>  
      </div>

      <div class="flex_container">
        <Tile location='e1' color='blue' piece=''/> 
        <Tile location='e2' color='red' piece=''/> 
        <Tile location='e3' color='blue' piece=''/> 
        <Tile location='e4' color='red' piece=''/> 
        <Tile location='e5' color='blue' piece=''/>
        <Tile location='e6' color='red' piece=''/> 
        <Tile location='e7' color='blue' piece=''/> 
        <Tile location='e8' color='red' piece=''/>  
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
        <Tile location='b1' color='red' piece={<Piece color="W" type='Pawn' />}/> 
        <Tile location='b2' color='blue' piece={<Piece color="W" type='Pawn' />}/> 
        <Tile location='b3' color='red' piece={<Piece color="W" type='Pawn' />}/> 
        <Tile location='b4' color='blue' piece={<Piece color="W" type='Pawn' />}/> 
        <Tile location='b5' color='red' piece={<Piece color="W" type='Pawn' />}/> 
        <Tile location='b6' color='blue' piece={<Piece color="W" type='Pawn' />}/> 
        <Tile location='b7' color='red' piece={<Piece color="W" type='Pawn' />}/> 
        <Tile location='b8' color='blue' piece={<Piece color="W" type='Pawn' />}/> 
      </div>
        
      <div class="flex_container">
        <Tile location='a1' color='blue' piece={<Piece color="W" type='Rook' />}/> 
        <Tile location='a2' color='red' piece={<Piece color="W" type='Knight' />}/> 
        <Tile location='a3' color='blue' piece={<Piece color="W" type='Bishop' />}/> 
        <Tile location='a4' color='red' piece={<Piece color="W" type='King' />}/> 
        <Tile location='a5' color='blue' piece={<Piece color="W" type='Queen' />}/> 
        <Tile location='a6' color='red' piece={<Piece color="W" type='Bishop' />}/> 
        <Tile location='a7' color='blue' piece={<Piece color="W" type='Knight' />}/> 
        <Tile location='a8' color='red' piece={<Piece color="W" type='Rook' />}/>
      </div>
    </div>
  );
}
