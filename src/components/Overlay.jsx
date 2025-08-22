import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import DonutInfo from "./DonutInfo";
import Navigator from "./Navigator";
import Navbar from "./Navbar";

const Overlay = () => {
  const donutTextRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      donutTextRef.current,
      { xPercent: -20, opacity: 0 },
      {
        duration: 1.5,
        xPercent: 0,
        opacity: 1,
        ease: "power2.out",
        delay: 1,
      }
    );
  });

  return (
    <>
      <div className="absolute flex flex-col justify-between h-dvh w-full top-0 left-0 pointer-events-none">
        <div className="navbar-background">
          <div className="ml-30 mr-50 mb-9 mt-9 flex align-middle justify-between">
            <div
              className="font-bold text-6xl text-macondo-regular"
              ref={donutTextRef}
            >
              Donuts
            </div>
            <Navbar />
            {/* {<div className="flex gap-12 text-3xl text-poppins-mid-heavy">
              <div className="content-center">Order</div>
              <div className="content-center">About</div>
              <div className="content-center">Contact</div>
            </div>} */}
          </div>
        </div>
        <div className="flex">
          <DonutInfo />
        </div>

        <div className="flex m-20 justify-between">
          <div className="font-light italic text-2xl">By Dharahas</div>
          <Navigator />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
