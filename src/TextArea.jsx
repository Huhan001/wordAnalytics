import {useState} from "react";
import style from "./Application.module.css";
import {Warning} from "./Warning.jsx";

export const TextArea = () => {
  const [text, setText] = useState("");
//  const [raiseWarning, setWarning] = useState(false);
  const [warnMesage, SetMesage] = useState('');


  const ProcessText = (change) => {
  //  updating logic
    change = change.includes('@') ? change.replace('@', "") : change;
    change = change.includes('#') ? change.replace('#', "") : change;
    change = change.includes('<') ? change.replace('<', "") : change;
    change = change.includes('>') ? change.replace('>', "") : change;
    change = change.includes('~') ? change.replace('~', "") : change;
    change = change.includes('^') ? change.replace('^', "") : change;
    change = change.includes('**') ? change.replace('**', "") : change;
    return change;
  }


  const PassText = (event) => {
    let changedEvent = event.target.value;

    const donts = ["@", "#", "<", ">", "**", "^", "~"];
//    setWarning(donts.some(x => changedEvent.includes(x)));

    let chars = donts.find(char => changedEvent.includes(char)) ?? null;
    SetMesage(chars && `character ${chars} not supported`)

    changedEvent = ProcessText(changedEvent);
    setText(changedEvent);
  };

  return (
      <div className={style.textarea}>
        <textarea
          onChange={PassText}
          value={text}
          placeholder="Type something..."
          spellCheck="false"
        />
        <Warning warnMesage ={warnMesage}/>
    </div>
  );
};

//it is not possible to add classname to react fragments.
