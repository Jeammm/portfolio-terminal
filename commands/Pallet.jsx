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

const pallet = (str) => {
  const [command, ...argument] = str.split(" ");

  if (command == "ls") {
    if (argument.length) {
      if (!folders.includes(argument[0])) {
        return <p>ls: {argument.join(" ")}: No such file or directory</p>;
      }
      return <p>ls: {argument.join(" ")}: Access denied</p>;
    }
    return (
      <div className="grid col-auto">
        {folders.map((f) => (
          <div>
            <p>{f}</p>
          </div>
        ))}
      </div>
    );
  }

  if (command == "welcome") {
    return <Welcome />;
  }

  return <p>command not found: {str}</p>;
};

export default pallet;
