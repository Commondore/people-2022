const Counter = ({ data, children }) => {
  const counterStyle = {
    color: "green",
    fontSize: "3rem",
  };

  if (data.length < 3) {
    counterStyle.color = "orange";
  }
  if (data.length < 2) {
    counterStyle.color = "red";
  }
  return (
    <h2 style={{ marginBottom: "3rem" }}>
      {children} <span style={counterStyle}>{data.length}</span>
    </h2>
  );
};

export default Counter;
