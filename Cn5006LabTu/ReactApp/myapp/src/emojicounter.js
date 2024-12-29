import React, { useState, useEffect } from "react";
import Love from "./Assets/Love.png";
import Sad from "./Assets/sad.png";
import Like from "./Assets/like.png";

function EmojeeCounter(props) {
  const [pic, setPic] = useState(Love);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (props.pic === "Love") {
      setPic(Love);
    } else if (props.pic === "Like") {
      setPic(Like);
    } else if (props.pic === "sad") {
      setPic(Sad);
    }
  }, [props.pic]);

  const ClickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p>
        {props.pic} <span></span>
        <button onClick={ClickHandle}>
          {count}
          <img src={pic} alt="" />
        </button>
      </p>
    </div>
  );
}

export default EmojeeCounter;
