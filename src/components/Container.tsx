import { useState } from "react";
import AsciTitle from "./AsciTitle";
export default function Container() {
  const [text, setText] = useState("");
  const [darkToggle, setDarkToggle] = useState(true);
  const [history, setHistory] = useState<string[]>([]);

  const addHistory = (input: string) => {
    setHistory((oldHistory) => [...oldHistory, input]);
    checkInput(input);
  };

  const checkInput = (input: string) => {
    switch (input) {
      case "dark":
        setDarkToggle(!darkToggle);
        console.log("setDarkToggle");
        break;
      case "resume":
        console.log("resume");
        break;
      case "about":
        console.log("about");
        break;
      case "contact":
        //print contact
        console.log("contact");
        break;
      default:
        //command not found
        return console.log("switch statement");
    }
  };

  const linePreFix = (
    <p className="mr-2">guest@{window.location.hostname} ~ </p>
  );

  const onSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("enter hit");
      addHistory(text);
    }
  };
  const printHistory = history.map((value: string, index: number) => (
    <p key={index} className="flex">
      {linePreFix}
      {value}
    </p>
  ));

  return (
    <span className={`${darkToggle && "dark"}`}>
      <div
        className={`h-screen bg-orange-300 dark:bg-slate-800 text-white text-xl `}
      >
        <AsciTitle />
        <div>{printHistory}</div>
        <div className="flex">
          {linePreFix}
          <input
            type="text"
            className="bg-transparent caret-slate-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={onSubmit}
          />
        </div>
      </div>
    </span>
  );
}
