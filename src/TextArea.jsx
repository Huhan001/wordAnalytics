import { useState } from "react";
import style from "./Application.module.css";

export const TextArea = () => {
  const [text, setText] = useState("");
  
  const PassText = (event) => {
    setText(event.target.value)
    console.log(text)
  }

  return (
    <textarea
      onChange={PassText}
      value={text}
      className={style.textarea}
      placeholder="Type something..."
      spellCheck="false"
    />
  );
};
