import { useState } from "react";

export default function Tile(props) {
  let [color, setColor] = useState(props.color);
  let handleTileClick = function() {
    // TODO: Call props.onClick() and only set the color if it returns true
    setColor('orange');
  };
  return (
    <div onClick={() => handleTileClick()}  class={color + ' tile'} id={props.location}>
      {props.piece}
    </div>
  );
}

