let board = [
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-"]
];

export default function Chessboard() {
  let html = "";
  for (let indiv of board) {
    html += "<div>" + { indiv } + "</div>";
  }
  return (
    <div className="flex_container">
      <span className="red_chessboard">Chessboard</span>
    </div>
  );
}
