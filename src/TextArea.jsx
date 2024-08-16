import {useState} from "react";
import style from "./Application.module.css";
import {Warning} from "./Warning.jsx";

export const TextArea = () => {
  const [text, setText] = useState("");
//  const [raiseWarning, setWarning] = useState(false);
  const [warningMesage, setMesage] = useState('');


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


  const checkRaiseWarningMesage = (change) => {
    if (change.includes("@")) {
      setMesage("character @ not supported");
      change = change.replace("@", "");
//      setWarning(true);
    } else if (change.includes("#")) {
      setMesage("character # not supported");
      change = change.replace("#", "");
//      setWarning(true);
    } else if (change.includes("~")) {
      setMesage("character ~ not supported");
      change = change.replace("~", "");
//      setWarning(true);
    } else if (change.includes(">")) {
      setMesage("character > not supported");
      change = change.replace(">", "");
//      setWarning(true);
    } else if (change.includes("^")) {
      setMesage("character ~ not supported");
      change = change.replace("^", "");
//      setWarning(true);
    } else if (change.includes("**")) {
      setMesage("character ** not supported");
      change = change.replace("**", "");
//      setWarning(true);
    }

    setText(change);
  }



  const PassText = (event) => {
    let changedEvent = event.target.value;

//    const donts = ["@", "#", "<", ">", "**", "^", "~"];
//    setWarning(donts.some(x => changedEvent.includes(x)));
//
//    changedEvent = ProcessText(changedEvent);
    checkRaiseWarningMesage(changedEvent);
//    setText(changedEvent);

  };

  return (
      <div className={style.textarea}>
        <textarea
          onChange={PassText}
          value={text}
          placeholder="Type something..."
          spellCheck="false"
        />
        {/*option 1*/}
        {/*{text.includes('<string') && <Warning />}*/}
        {/*{raiseWarning && <Warning/>}*/}
        {warningMesage && <Warning warningMesage ={warningMesage}/>}
    </div>
  );
};

//it is not possible to add classname to react fragments.
