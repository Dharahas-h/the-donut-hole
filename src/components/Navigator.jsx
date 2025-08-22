import { useGSAP } from "@gsap/react";
import {
  dispatchScrollToEvent,
  donutInfo,
  useDonutState,
  useStore,
} from "../store";
import { useRef } from "react";
import gsap from "gsap";

const Navigator = () => {
  const donutInfos = donutInfo.slice(1);

  return (
    <div className="content-center flex gap-7 pointer-events-auto">
      {donutInfos.map((obj, idx) => (
        <NavigationItem key={idx} name={obj.name} number={idx} />
      ))}
    </div>
  );
};

const NavigationItem = ({ name, number }) => {
  const donutState = useDonutState();
  const navItemRef = useRef();
  const donutInfos = donutInfo.slice(1);
  const { open } = useStore();

  useGSAP(() => {
    if (donutState.donutNumber === number && open === 0) {
      gsap.to(navItemRef.current, {
        scale: 1.8,
        yPercent: -160,
        duration: 0.5,
        color: "white",
      });
    } else {
      gsap.to(navItemRef.current, {
        scale: 1,
        yPercent: 0,
        duration: 0.5,
      });
    }
  }, [donutState.donutNumber, open]);

  return (
    <div
      ref={navItemRef}
      className="text-poppins-semi-bold content-center rounded-2xl p-3 cursor-pointer"
      style={{ backgroundColor: donutInfos[number].color, color: "white" }}
      onClick={(e) => {
        e.stopPropagation();

        dispatchScrollToEvent(number);
      }}
    >
      {name}
    </div>
  );
};
export default Navigator;
