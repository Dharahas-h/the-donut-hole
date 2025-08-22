import { useEffect } from "react";
import { getTargetScroll, useDonutState, useStore } from "../store";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ScrollBus = () => {
  const store = useStore();
  const scroll = useScroll();
  const donutState = useDonutState();

  useEffect(() => {
    const scrollTo = (e) => {
      const targetLeft = getTargetScroll(scroll.el, e.detail.donutNumber);

      if (store.open !== 0) {
        store.open = 0;
      }

      scroll.el.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
    };

    document.addEventListener("ScrollTo", scrollTo);

    return () => document.removeEventListener("ScrollTo", scrollTo);
  });

  useFrame(() => {
    donutState.donutNumber = Math.min(3, Math.floor(3 * scroll.offset + 0.5));
  });
};

export default ScrollBus;
