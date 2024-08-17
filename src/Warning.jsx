import style from "./Application.module.css"
export const Warning = ({warnMesage}) => {
    return (
        <p className={style.warning}>{warnMesage}</p>
    )
}