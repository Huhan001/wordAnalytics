import style from "../style/Application.module.css";
export const Warning = ({ warnMesage }) => {
  return <p className={style.warning}>{warnMesage}</p>;
};
