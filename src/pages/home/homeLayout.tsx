import { Scroll, useScroll } from "@react-three/drei";
import chromeHeart from "../../assets/chromeheart-collection.jpg";
import darker from "../../assets/darker-than-black-collection.jpg";
import faithless from "../../assets/faithless-collection.jpg";
import "./home.css";
import Section from "../../components/section/Section";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import useScreenSize from "../../components/hooks/useScreenSize";

const HomeLayout = () => {
  const scroll = useScroll();
  const [titleSize, setTitleSize] = useState(10);
  const { isMobile } = useScreenSize();

  useFrame(() => {
    if (isMobile) {
      const scrollY = scroll.offset;
      setTitleSize(3 - scrollY * 10);
    } else {
      const scrollY = scroll.offset;
      setTitleSize(10 - scrollY * 55);
    }
  });

  return (
    <Scroll style={{ width: "100%" }} html>
      <div className="hero">
        <h1 style={{ fontSize: `${titleSize}rem` }}>Mr. Hyde Store</h1>
      </div>
      <div className="container">
        <Section
          img={chromeHeart}
          title="ChromeHeart Collection"
          description="Immerse yourself in the allure of ChromeHeart, a silver rings
                collection that redefines luxury. Each piece is meticulously
                crafted, blending edgy aesthetics with timeless elegance.
                ChromeHeart isn't just a statement—it's an experience, where
                bold design meets premium quality, capturing the essence of
                those who dare to stand out."
          current={0}
        />
        <Section
          img={darker}
          title="Darker Than Black Collection"
          description="Discover the Darker than Black collection, adorned with black
                rubies and diamonds, where sophistication meets mystery. These
                silver rings evoke a sense of enigma and rebellion, perfect for
                those who embrace the darker side of elegance. Each ring is a
                testament to exquisite craftsmanship and luxurious appeal,
                designed for those unafraid to tread the path less taken."
          current={1}
        />
        <Section
          img={faithless}
          title="Faithless Collection"
          description="Unveil the Faithless collection, a tribute to unrestrained
                luxury and fearless individuality. These silver rings, featuring
                crosses, embody a rebellious spirit, with designs that challenge
                the ordinary. Faithless is for the bold and the unapologetic,
                offering a premium, edgy aesthetic that transforms any outfit
                into a statement of confidence and style."
          current={2}
        />
      </div>
    </Scroll>
  );
};

export default HomeLayout;
