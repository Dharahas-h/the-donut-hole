import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { getTargetScroll, totalDonuts, useStore } from "../store";
import { easing } from "maath";

const onDonutClick = (store, index, element, e) => {
  e.stopPropagation();
  const targetLeft = getTargetScroll(element, index);

  if (store.open == 0) {
    element.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });

    const onScroll = () => {
      if (Math.abs(element.scrollLeft - targetLeft) < 4) {
        store.open = index + 1;
        element.removeEventListener("scroll", onScroll);
      }
    };

    if (Math.abs(element.scrollLeft - targetLeft) <= 4) {
      store.open = index + 1;
    } else {
      element.addEventListener("scroll", onScroll);
    }
  } else {
    store.open = 0;
  }
};

const Donut = ({ index, path }) => {
  const { width } = useThree((state) => state.viewport);
  const { scene } = useGLTF(path);
  const ref = useRef();
  const scroll = useScroll();
  const scrollGap = 1 / (totalDonuts - 1);
  const store = useStore();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const y = scroll.curve(-scrollGap / 2 + index * scrollGap, scrollGap);
    easing.damp3(
      ref.current.scale,
      store.open == index + 1 ? 1 + y * 7 : 1 + y * 5,
      0.1,
      delta
    );
    easing.damp3(
      ref.current.position,
      store.open == index + 1
        ? [index * width + width / 4, 0, 0]
        : [index * width, 0, 0],
      0.5,
      delta
    );

    ref.current.rotation.set(
      0.7 + Math.cos((5 * t) / 3) / 4,
      Math.cos((5 * t) / 4),
      0.15 + Math.sin((5 * t) / 2) / 3
    );
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[index * width, 0, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      onClick={(event) => onDonutClick(store, index, scroll.el, event)}
    />
  );
};

export default Donut;
