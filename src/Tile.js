export default function Tile(props) {
  console.log(props.piece);
  return <div class={props.color} id={props.location}>{props.piece}</div>;
}
