import { Stats } from "./Stats";
import { TextArea } from "./TextArea";
import style from "../style/Application.module.css";
import { useState } from "react";

export const Container = () => {
  const [text, setText] = useState("");
  const Metrics = {
    words: text.split(/\s/).filter((word) => word !== "").length,
    Character: text.length,
    Instagram: 280 - text.length,
    facebook: 2200 - text.length,
  };

  return (
    <main className={style.container}>
      <TextArea text={text} setText={setText} />
      <Stats Metrics={Metrics} />
    </main>
  );
};
