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

    const result = { cmd, result: Pallet(cmd) };

    setCmdHistory((cmdHistory) => [...cmdHistory, result]);
    setCmd("");
  };

  useEffect(() => {
    document.getElementById("bottom").scrollIntoView();
  }, [cmdHistory]);

  return (
    <main className="flex flex-col p-3 bg-background h-full">
      {cmdHistory.map((c) => (
        <HistoryPrefix cmd={c.cmd}>{c.result}</HistoryPrefix>
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
