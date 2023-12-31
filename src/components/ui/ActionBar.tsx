type ActionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div
      style={{
        margin: "10px 0",
      }}
    >
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
          margin: 10,
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBar;
