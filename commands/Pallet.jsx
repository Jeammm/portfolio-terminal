import React from "react";

import ls from "./functions/func_ls";
import cd from "./functions/func_cd";
import Welcome from "./Welcome";
import about from "./functions/func_about";
import email from "./functions/func_email";
import whoami from "./functions/func_whoami";
import echo from "./functions/func_echo";
import pwd from "./functions/func_pwd";
import projects from "./functions/func_projects"

const help = () => {
  const cmdList = Object.keys(cmdPallet);
  return (
    <div>
      {cmdList.map((c, index) => (
        <div key={`cmd-help-${index}`} className="flex">
          <p className="w-24 md:w-60">{c}</p>
          <p className="flex-1">{cmdPallet[c].desc}</p>
        </div>
      ))}
    </div>
  );
};

export const cmdPallet = {
  ls: { func: ls, desc: "- see all directory" },
  welcome: { func: Welcome, desc: "- show welcome text" },
  about: { func: about, desc: "- see detail about Athicha" },
  email: { func: email, desc: "- Athicha's email" },
  help: { func: help, desc: "- see all available commands" },
  cd: { func: cd, desc: "- navigate to a directory" },
  clear: { desc: "- clear command history" },
  pwd: { func: pwd, desc: "- shows the current working directory's path." },
  echo: { func: echo, desc: "- prints a message as a standard output." },
  whoami: { func: whoami, desc: "- Who is the current user." },
  projects: {func: projects, desc: "- Showcase of my past projects"}
};

const pallet = (str) => {
  const [command, ...argument] = str.split(" ");
  const cmdList = Object.keys(cmdPallet);

  if (cmdList.includes(command)) {
    const { func } = cmdPallet[command];
    return func(argument);
  }

  return <p>command not found: {str}</p>;
};

export default pallet;
