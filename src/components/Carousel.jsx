import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { donutModelPaths, totalDonuts, useStore } from "../store";
import Donut from "./Donut";
import ScrollBus from "./ScrollBus";

const Carousel = () => {
  const { open } = useStore();

  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 40 }}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight color="white" intensity={80} position={[3, 3, 0]} />
      <ScrollControls
        horizontal
        damping={0.2}
        pages={totalDonuts}
        distance={1 / (totalDonuts - 1)}
        enabled={open ? false : true}
      >
        <Scroll>
          {donutModelPaths.map((modelPath, index) => (
            <Donut key={index} index={index} path={modelPath} />
          ))}
          <ScrollBus />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default Carousel;
