"use client";

import { useState, useEffect } from "react";

import Prefix from "@/components/Prefix";
import HistoryPrefix from "@/components/HistoryPrefix";

import Pallet from "@/commands/Pallet";

export default function Home() {
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmd, setCmd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cmd === "clear") {
      setCmdHistory([]);
      setCmd("");
      return;
    } else if (cmd === "") {
      setCmdHistory((prev) => [...prev, { cmd }]);
      return;
    }

    setCmd("");
    const result = { cmd, result: Pallet(cmd) };
    setCmdHistory((cmdHistory) => [...cmdHistory, result]);
  };

  useEffect(() => {
    document.getElementById("bottom").scrollIntoView();
  }, [cmdHistory]);

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
      <form className="current_cmd " onSubmit={handleSubmit}>
        <Prefix>
          <input
            value={cmd}
            onChange={(e) => setCmd(e.target.value)}
            className="bg-transparent text-white outline-none w-full font-mono"
            autoFocus
          />
        </Prefix>
      </form>
      <div id="bottom"></div>
    </main>
  );
}
