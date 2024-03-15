import { useState } from "react";
import Box from "./components/Box";
import boxes from "./components/boxes";

export default function App() {
  const [box, setBox] = useState(boxes);
  const boxData = box.map((boxItem) => {
    return <Box {...boxItem}></Box>;
  });
  return <div className="box-container">{boxData}</div>;
}
