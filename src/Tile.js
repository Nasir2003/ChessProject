import { useState } from "react";

export default function Tile(props) {
  let [color, setColor] = useState(props.color);
  let handleTileClick = function() {
    // TODO: Update color state variable to "orange" to
    // represent this tile is in "move mode".
    setColor('orange');
  };
  return (
    <div onClick={() => handleTileClick()}  class={color + ' tile'} id={props.location}>
      {props.piece}
    </div>
  );
}

