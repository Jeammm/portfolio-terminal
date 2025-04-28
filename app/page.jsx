"use client";

import { useState, useEffect } from "react";

import Prefix from "@/components/Prefix";
import HistoryPrefix from "@/components/HistoryPrefix";

import Pallet, { cmdPallet } from "@/commands/Pallet";

export default function Home() {
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmd, setCmd] = useState("");
  const [historyPointer, setHistoryPointer] = useState(0);
  const [autoComplete, setAutoComplete] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cmd === "clear") {
      setCmdHistory([]);
      setCmd("");
      setHistoryPointer(0);
      return;
    } else if (cmd === "") {
      setCmdHistory((prev) => [...prev, { cmd }]);
      return;
    } else if (cmd === "history") {
      const history = cmdHistory.map((h, i) => (
        <p key={`history-cmd-${i}`}>{h.cmd}</p>
      ));
      setCmdHistory((prev) => [...prev, { cmd, result: history }]);
      setCmd("");
      return;
    }

    setCmd("");
    const result = { cmd, result: Pallet(cmd) };
    setCmdHistory((cmdHistory) => [...cmdHistory, result]);
    setHistoryPointer(0);
    setAutoComplete([]);
  };

  const shortcutHandler = (e) => {
    if (e.key == "ArrowUp") {
      e.preventDefault();
      const l = cmdHistory.length - 1;
      if (l < 0) {
        return;
      }
      const target = l - historyPointer;
      setCmd(cmdHistory[target].cmd);
      if (target <= 0) {
        return;
      }
      setHistoryPointer((prev) => prev + 1);
    } else if (e.key == "ArrowDown") {
      e.preventDefault();
      const l = cmdHistory.length - 1;
      const target = l - historyPointer + 1;

      if (target > l) {
        setCmd("");
        return;
      } else {
        setCmd(cmdHistory[target].cmd);
      }
      setHistoryPointer((prev) => prev - 1);
    } else if (e.key == "Tab") {
      e.preventDefault();
      if (cmd == "") {
        return;
      }

      let bucket = Object.keys(cmdPallet);
      bucket = bucket.filter((c) => c.startsWith(cmd));

      if (bucket.length == 0) {
        return;
      } else if (bucket.length == 1) {
        setCmd(bucket[0]);
        setAutoComplete([]);
      } else {
        setAutoComplete(bucket);
      }
    }
  };

  useEffect(() => {
    document.getElementById("bottom")?.scrollIntoView({ behavior: "smooth" });
  }, [cmdHistory, autoComplete]);

  useEffect(() => {
    const result = { cmd: "welcome", result: Pallet("welcome") };
    setCmdHistory((cmdHistory) => [result]);
  }, []);

  return (
    <main className="flex flex-col p-3 bg-background h-full">
      {cmdHistory.map((c, index) => (
        <HistoryPrefix cmd={c.cmd} key={`command-no-${index}`}>
          {c.result}
        </HistoryPrefix>
      ))}
      <form className="font-mono" onSubmit={handleSubmit}>
        <Prefix>
          <input
            value={cmd}
            onChange={(e) => setCmd(e.target.value)}
            className="bg-transparent text-white outline-none w-full font-mono caret-green"
            autoFocus
            onBlur={({ target }) => target.focus()}
            onKeyDown={shortcutHandler}
          />
        </Prefix>
        <p>{autoComplete.join(" ")}</p>
        <div id="bottom"></div>
      </form>
    </main>
  );
}
