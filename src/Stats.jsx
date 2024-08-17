import style from "./Application.module.css";

export const Stats = ({text}) => {
  return (
    <section className={style.stats}>
      <Statistics label = 'Word' counts = {text ? text.split(' ').length : 0}/>
      <Statistics label = 'Character' counts = {text.length}/>
      <Statistics label = 'Instagram' counts = {280 - text.length}/>
      <Statistics label = 'Facebook' counts = {2200 - text.length}/>
    </section>
  )
};

const Statistics = ({label, counts}) => {
  return (
    <section className={style.stat}>
      <span className={style.stat_number}> {counts} </span>
      <h2 className={style.second_heading}> {label} </h2>
    </section>
  )
}

// if everything is related it is best to put it under one section
// props are forver objects that will need to be distructured.
//pass the lable or name of paramaeter on props
