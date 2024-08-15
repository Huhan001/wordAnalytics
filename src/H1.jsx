import style from "./Application.module.css";

export const H1 = () => {
  return (
    <>
      <h1 className={style.first_heading}>
        Word <span className={style.first_heading_thin}>Analytics</span>{" "}
      </h1>
    </>
  );
};
