import { useState } from "react";
import Box from "./components/Box";
import boxes from "./components/boxes";

export default function App() {
  const [box, setBox] = useState(boxes);
  function toggle(id) {
    setBox((prevBox) => {
      return prevBox.map(updatedBox =>{
        return updatedBox.id===id?{...updatedBox,on:!updatedBox.on}:{...updatedBox}
      })
    });
  }
  const boxData = box.map((boxItem) => {
    return <Box key={boxItem.id} {...boxItem} toggle={toggle}></Box>;
  });
  return <div className="box-container">{boxData}</div>;
}
