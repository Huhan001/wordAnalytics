import { Stats } from "./Stats";
import { TextArea } from "./TextArea";
import style from "./Application.module.css";

export const Container = () => {
  return (
    <main className={style.container}>
      <TextArea />
      <Stats />
    </main>
  );
};
