import { useState } from "react";

export default function Tile(props) {
  let [color, setcolor] = useState(props.color);
  let handleTileClick = function() {
    // TODO: Update color state variable to "orange" to
    // represent this tile is in "move mode".
  };
  return (
    <div onClick={() => handleTileClick()}  class={props.color} id={props.location}>
      {props.piece}
    </div>
  );
}

