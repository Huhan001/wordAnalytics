import { Stats } from "./Stats";
import { TextArea } from "./TextArea";
import style from "./Application.module.css";
import {useState} from "react";

export const Container = () => {
  const [text, setText] = useState("");

  return (
    <main className={style.container}>
      <TextArea text ={text} setText ={ setText}/>
      <Stats text ={text}/>
    </main>
  );
};
