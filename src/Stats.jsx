import style from "./Application.module.css";

export const Stats = ({Metrics}) => {
//  passing the wrong parameter name will result to failure to return
  return (
    <section className={style.stats}>
      <Statistics label = 'Word' counts = {Metrics.words}/>
      <Statistics label = 'Character' counts = {Metrics.Character}/>
      <Statistics label = 'Instagram' counts = {Metrics.Instagram}/>
      <Statistics label = 'Facebook' counts = {Metrics.facebook}/>
    </section>
  )
};

const Statistics = ({label, counts}) => {
    return (
      <section className={style.stat}>
        <span className={counts < 0 ? style.stat_number_limit : style.stat_number}> {counts} </span>
      <h2 className={style.second_heading}> {label} </h2>
    </section>
  )
}

// if everything is related it is best to put it under one section
// props are forver objects that will need to be distructured.
//pass the lable or name of paramaeter on props
