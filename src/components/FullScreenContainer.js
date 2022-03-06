function FullScreenContainer({ children }) {
  const style = {
    height: "100vh",
  };
  return <div style={style}>{children}</div>;
}

export default FullScreenContainer;
