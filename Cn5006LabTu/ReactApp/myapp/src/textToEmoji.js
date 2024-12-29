import React, { useState } from "react";
import Happy from "./Assets/happy.png";
import Sad from "./Assets/sad.png";
import Like from "./Assets/like.png";

function TextToEmoji() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setText(value);

    if (value === "happy") {
      setImage(Happy);
    } else if (value === "like") {
      setImage(Like);
    } else if (value === "sad") {
      setImage(Sad);
    } else {
      setImage(null);
    }
  };

  return (
    <div className="App">
      <label>
        Type Emotion: 
        <input type="text" value={text} onChange={handleInputChange} />
      </label>
      <div>{image && <img src={image} alt={text} />}</div>
    </div>
  );
}

export default TextToEmoji;
