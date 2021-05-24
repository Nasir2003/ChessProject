
export default function Tile(props) {
  // Expected props:
  //   props.color: 'red' or 'blue'
  //   props.onTileClick: function to call when div is clicked
  //   props.isMoveMode: if true, set color to orange

  let color;
  // if isMoveMode is true, then set color to 'orange'
  if (props.isMoveMode){
    color = 'orange';
  }
  // if isMoveMode is false, set color to "red" or "blue" (props.color)
  else{ 
    color = props.color;
  }
  let handleTileClick = function() {
    props.onTileClick();
  };
  return (
    <div onClick={() => handleTileClick()} class={color + ' tile'} id={props.location}>
      {props.piece}
    </div>
  );
}

