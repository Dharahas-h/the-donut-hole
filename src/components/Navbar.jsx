import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    gsap.from(["#order", "#about", "#contact"], {
      xPercent: -100,
      opacity: 0,
      duration: 1.5,
      delay: 1,
      ease: "power2.out",
    });
  });

  return (
    <div className="flex gap-12 text-3xl text-poppins-mid-heavy">
      <div id="order" className="content-center">
        Order
      </div>
      <div id="about" className="content-center">
        About
      </div>
      <div id="contact" className="content-center">
        Contact
      </div>
    </div>
  );
};

export default Navbar;
