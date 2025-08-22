import { proxy } from "valtio";
import { useProxy } from "valtio/utils";

const store = proxy({ open: 0 });
const donutState = proxy({ donutNumber: 0 });

export const basePath = "the-donut-hole";

export const donutModelPaths = [
  `/${basePath}/models/donut1.glb`,
  `/${basePath}/models/donut2.glb`,
  `/${basePath}/models/donut3.glb`,
  `/${basePath}/models/donut4.glb`,
];

export const donutInfo = [
  {
    name: "",
    description: "",
    price: "",
  },
  {
    name: "Choco Chaos",
    description:
      "The classic chocolate donut is the definition of comfort food. Soft, pillowy dough is coated in a silky layer of milk chocolate glaze that melts in your mouth the moment you take a bite. It’s the kind of donut that feels familiar and nostalgic—sweet enough to satisfy cravings but never overwhelming. Paired with a glass of milk or your morning coffee, the chocolate donut is a timeless indulgence that never goes out of style.",
    color: "#7B3F00",
  },
  {
    name: "Violet Crumble",
    description:
      "Soft, fluffy, and irresistibly unique, this donut is coated in a rich purple glaze that immediately catches the eye. Often crafted with flavors like ube (a naturally sweet purple yam) or infused with light lavender notes, it delivers a delicate balance of sweetness and aroma. The flavor is smooth, creamy, and slightly earthy—something different from the usual chocolate or fruit glazes. Beautiful, intriguing, and delicious, this donut is the perfect choice for anyone looking to try something both elegant and adventurous.",
    color: "#800080",
  },
  {
    name: "Goey Galaxy",
    description:
      "Rich, bold, and sophisticated, the dark chocolate donut is made for true chocolate enthusiasts. Its deep cocoa glaze brings out slightly bitter notes that balance perfectly with the sweetness of the fluffy dough beneath. Unlike regular chocolate, dark chocolate offers an intense flavor that feels more indulgent and even a little luxurious. It’s the donut that proves desserts can be decadent and refined, making it perfect for those who like their sweetness with an edge.",
    color: "#A52A2A",
  },
  {
    name: "Berry bolt",
    description:
      "The blue donut is as much a feast for the eyes as it is for the taste buds. Its vibrant blue glaze instantly grabs attention, while the flavor—often blueberry-inspired—adds a sweet, slightly tangy twist. The balance of fruity notes and pillowy dough makes it both unique and irresistible. Whether you’re after something different from the classics or just want a donut that pops with color, the blue donut brings creativity and flavor together in one delicious bite.",
    color: "#1434A4",
  },
];

export const totalDonuts = donutModelPaths.length;

export const dispatchScrollToEvent = (number) => {
  const scrollToEvent = new CustomEvent("ScrollTo", {
    detail: { donutNumber: number },
  });

  document.dispatchEvent(scrollToEvent);
};

export const getTargetScroll = (element, donutNumber) => {
  const totalScroll = element.offsetWidth / (totalDonuts - 1);
  return totalScroll * (donutNumber / (totalDonuts - 1));
};

export const useStore = () => useProxy(store);
export const useDonutState = () => useProxy(donutState);
