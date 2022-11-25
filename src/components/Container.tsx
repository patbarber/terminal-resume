import { useState } from "react";
import AsciTitle from "./AsciTitle";
import { help, about, contact, resume } from "./commands";

export default function Container() {
  const [text, setText] = useState("");
  const [darkToggle, setDarkToggle] = useState(true);
  const [history, setHistory] = useState<string[]>([]);
  const [command, setCommand] = useState<{}[]>([]);

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
      case "help":
        console.log("help: ", help);
        setCommand(help);
        setText("");
        break;
      default:
        //command not found
        return console.log("switch statement");
    }
  };

  const linePreFix = (
    <p className="mr-2 flex-shrink">guest@{window.location.hostname} ~ </p>
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

  const printCommand = command.map((value: any, index: number) => (
    <>
      <p className="w-fit glow">{value.command}</p>{" "}
      <p className="w-fit">{value.description}</p>
    </>
  ));

  return (
    <span className={`${darkToggle && "dark"}`}>
      <div
        className={`h-screen bg-orange-300 dark:bg-slate-800 text-white text-xl p-2`}
      >
        <div className="h-full border-slate-600 border-2 p-4">
          <AsciTitle />
          <div className="mt-2">{printHistory}</div>
          <div className="grid grid-cols-2 max-w-fit p-4 gap-2">
            {printCommand}
          </div>
          <div className=" w-full">
            <label className="w-full flex flex-row">
              {linePreFix}
              <input
                type="text"
                className="bg-transparent focus-visible:outline-none caret-slate-200 flex-grow"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={onSubmit}
              />
            </label>
          </div>
        </div>
      </div>
    </span>
  );
}
