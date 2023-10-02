import React from "react";
import Welcome from "./Welcome";

const folders = [
  "Applications",
  "Library",
  "Postman",
  "Desktop",
  "Movies",
  "Public",
  "Documents",
  "Music",
  "VirtualBox VMs",
  "Downloads",
  "palindrome.txt",
  "AR Project",
  "Pictures",
];

const ls = (argument) => {
  if (argument.length) {
    if (!folders.includes(argument[0])) {
      return <p>ls: {argument.join(" ")}: No such file or directory</p>;
    }
    return <p>ls: {argument.join(" ")}: Access denied</p>;
  }
  return (
    <div className="flex flex-wrap gap-x-4">
      {folders.map((f, index) => (
        <div key={`dir-no-${index}`}>
          <p>{f}</p>
        </div>
      ))}
    </div>
  );
};

const cd = (argument) => {
  if (argument.length) {
    if (!folders.includes(argument[0])) {
      return <p>cd: {argument.join(" ")}: No such file or directory</p>;
    }
    return <p>cd: {argument.join(" ")}: Access denied</p>;
  }
  return;
};

const welcome = () => {
  return <Welcome />;
};

const about = () => {
  return (
    <div>
      <p>Hi, my name is Athicha</p>
      <p>I'm a Junior Student at Kasetsart University.</p>
      <p>And I love cats.</p>
    </div>
  );
};

const email = () => {
  return <p>athicha.phjkl@gmail.com</p>;
};

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

const pwd = () => {
  return <p>/home/athicha</p>;
};

const echo = (argument) => {
  return <p>{argument.join(" ")}</p>;
};

const whoami = () => {
  return <p>visitor</p>
}

export const cmdPallet = {
  ls: { func: ls, desc: "- see all directory" },
  welcome: { func: welcome, desc: "- show welcome text" },
  about: { func: about, desc: "- see detail about Athicha" },
  email: { func: email, desc: "- Athicha's email" },
  help: { func: help, desc: "- see all available commands" },
  cd: { func: cd, desc: "- navigate to a directory" },
  clear: { desc: "- clear command history" },
  pwd: { func: pwd, desc: "- shows the current working directory's path." },
  echo: { func: echo, desc: "- prints a message as a standard output." },
  whoami: { func: whoami, desc: "- Who is the current user." },
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
