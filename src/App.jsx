import Box from "./components/Box";
import boxes from "./components/boxes";

const boxData = boxes.map((boxItem) => {
  return <Box {...boxItem}></Box>;
});

export default function App() {
  return <div className="box-container">{boxData}</div>;
}
