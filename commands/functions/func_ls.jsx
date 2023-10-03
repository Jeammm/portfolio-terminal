import folders from "../foldersList"

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

export default ls