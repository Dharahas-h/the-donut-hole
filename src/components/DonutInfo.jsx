import { useGSAP } from "@gsap/react";
import { donutInfo, useStore } from "../store";
import gsap from "gsap";

const DonutInfo = () => {
  const { open } = useStore();

  useGSAP(() => {
    gsap.fromTo(
      "#descContainer",
      { opacity: 0 },
      {
        duration: 1.5,
        opacity: 1,
      }
    );
    gsap.fromTo(
      "#description",
      { yPercent: -50 },
      {
        duration: 1.5,
        ease: "power2.out",
        yPercent: 0,
      }
    );
    gsap.fromTo(
      "#heading",
      { xPercent: -20, color: "#000" },
      {
        xPercent: 0,
        duration: 1.5,
        ease: "power2.out",
        color: donutInfo[open].color || "#000",
      }
    );
  }, [open]);

  return (
    <div id="descContainer" className="flex flex-col ml-40 w-[50vw] gap-6">
      <div id="heading" className="text-3xl text-poppins-normal">
        {donutInfo[open].name}
      </div>
      <div id="description" className="m-5.5 text-2xl text-poppins-light">
        {donutInfo[open].description}
      </div>
    </div>
  );
};

export default DonutInfo;
