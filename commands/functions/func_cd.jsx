const cd = (argument, folders) => {
  if (argument.length) {
    if (!folders.includes(argument[0])) {
      return <p>cd: {argument.join(" ")}: No such file or directory</p>;
    }
    return <p>cd: {argument.join(" ")}: Access denied</p>;
  }
  return;
};

export default cd