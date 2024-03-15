export default function Box(props) {
  let backgroundColor = props.on ? "#222222" : "#cccccc";
  const styles = {
    backgroundColor: backgroundColor,
  };
  return (
    <div className="box" style={styles}>
      <span>{props.id}</span>
    </div>
  );
}
