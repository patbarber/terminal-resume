import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  const [darkToggle, setDarkToggle] = useState(false);
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
        console.log("contact");
        break;
      default:
        return console.log("switch statement");
    }
  };

  const printHistory = history.map((value: string, index: number) => (
    <p key={index}>{value}</p>
  ));

  return (
    <span className={`${darkToggle && "dark"}`}>
      <div
        className={`h-screen bg-orange-300 dark:bg-slate-800 text-white text-xl `}
      >
        <div className="border-b-2 border-red-600 dark:border-white">
          {printHistory}
        </div>

        <input
          type="text"
          className="bg-black border-2 border-white"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-black text-white"
          type="submit"
          value="added value"
          onClick={() => addHistory(text)}
        >
          submit
        </button>
        <button onClick={(e) => setDarkToggle(!darkToggle)}>ToggleDark</button>
      </div>
    </span>
  );
}
