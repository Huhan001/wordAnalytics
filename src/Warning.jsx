import style from "./Application.module.css"
export const Warning = ({warningMesage}) => {
    return (
//        <p className={style.warning}>{` not Supported @, #, <, >, **, ^, ~`}</p>
        <p className={style.warning}>{warningMesage}</p>
    )
}