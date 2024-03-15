import { useState } from "react";

export default function Box(props) {
  const [status, setStatus] = useState(props.on);
  function handleClick() {
    setStatus((prevStatus) => !prevStatus);
  }
  const styles = {
    backgroundColor: status ? "#222222" : "transparent",
  };
  return (
    <div className="box" style={styles} onClick={handleClick}>
      <span>{props.id}</span>
    </div>
  );
}
