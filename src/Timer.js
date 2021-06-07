import { useEffect, useState } from "react";

export default function Timer(props) {
  let [i, seti] = useState(0);
  useEffect(() => {
    let myFunc = function () {
      seti((i) => i + 1);
    };
    let id = setInterval(myFunc, 60000);
    console.log("setInternal called");
    return () => clearInterval(id);
  }, []);

  return <div>{<h1>Minutes Elapsed: {i}</h1>}</div>;
}
