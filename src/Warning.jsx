import style from "./Application.module.css"
export const Warning = ({warnMesage}) => {
    return (
//        <p className={style.warning}>{` not Supported @, #, <, >, **, ^, ~`}</p>
        <p className={style.warning}>{warnMesage}</p>
    )
}