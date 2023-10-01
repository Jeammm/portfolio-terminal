const HistoryPrefix = ({ cmd, children }) => {
  return (
    <div className="w-full font-mono mb-2">
      <p className="font-mono break-all">
        <span className="text-yellow">visitor</span>@
        <span className="text-green">terminal.aticha.dev</span>
        <span>:~$</span> {cmd}
      </p>
      {children}
    </div>
  );
};

export default HistoryPrefix;
