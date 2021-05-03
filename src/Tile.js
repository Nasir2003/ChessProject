export default function Tile(props) {
  return <div class={props.color} id={props.location}>{props.piece}</div>
}
