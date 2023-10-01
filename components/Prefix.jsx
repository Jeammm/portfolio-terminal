const Prefix = ({ children }) => {
  return (
    <div className="w-full flex">
      <p className="font-mono">
        <span className="text-yellow">visitor</span>@
        <span className="text-green">terminal.aticha.dev</span>
        <span>:~$&nbsp;</span>
      </p>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Prefix;
