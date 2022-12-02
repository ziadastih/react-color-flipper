const Main = (props) => {
  const styles = {
    backgroundColor: props.value,
  };
  return (
    <main style={styles}>
      <div className="color-container">
        <h2>
          Background color: <span>{props.value}</span>
        </h2>
      </div>
      <button onClick={props.generateColor}>click me</button>
    </main>
  );
};

export default Main;
