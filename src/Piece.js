import React from "react";
import { ReactComponent as DarkQueen } from "./pieces/dark_queen.svg";
import { ReactComponent as DarkKing } from "./pieces/dark_king.svg";
import { ReactComponent as DarkRook } from "./pieces/dark_rook.svg";
import { ReactComponent as DarkBishop } from "./pieces/dark_bishop.svg";
import { ReactComponent as DarkKnight } from "./pieces/dark_knight.svg";
import { ReactComponent as WhiteKnight } from "./pieces/White_Knight.svg";
import { ReactComponent as WhiteRook} from "./pieces/White-Rook.svg";

export default function Piece(props) {
  let pieceToRender; 

  if (props.color === "W" && props.type === "Rook") {
    pieceToRender = <WhiteRook />; 
  }
  
  if (props.color === "W" && props.type === "Knight") {
    pieceToRender = <WhiteKnight />;
  }
  else if (props.color === "B" && props.type === "Queen") {
    pieceToRender = <DarkQueen />;
  }
  else if (props.color === "B" && props.type === "King") {
    pieceToRender = <DarkKing />;
  }
  else if (props.color === "B" && props.type === "Rook") {
    pieceToRender = <DarkRook />;
  }
  else if (props.color === "B" && props.type === "Knight") {
    pieceToRender = <DarkKnight />;
  }



  return <p>{pieceToRender}</p>;
}
