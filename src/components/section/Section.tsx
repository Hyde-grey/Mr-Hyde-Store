import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import classNames from "classnames";
import buttonStyles from "../button/button.module.css";
import StartBorder from "../button/StartBorder";

import "./Section.css";

type SectionProps = {
  img: string;
  title: string;
  description: string;
  current: number;
  onClick: () => void;
  children?: React.ReactNode;
};

const Section = ({
  img,
  title,
  description,
  current,
  onClick,
  children,
}: SectionProps) => {
  const cardContainerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isShop, setIsShop] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (location.pathname === "/shop") {
      setIsShop(true);
    }
  }, [location.pathname]);

  useFrame(() => {
    const viewportHeight = window.innerHeight;

    cardContainerRefs.current.forEach((ref) => {
      if (!ref || isClicked) return; // Skip opacity calculation if clicked

      const rect = ref.getBoundingClientRect();
      const elementCenterY = rect.top + rect.height / 2;
      const viewportCenterY = viewportHeight / 2;
      const distanceFromCenter = Math.abs(viewportCenterY - elementCenterY);

      const maxOpacity = 1;
      const opacityValue = Math.max(
        maxOpacity - (distanceFromCenter / viewportHeight) * maxOpacity,
        0
      );

      ref.style.opacity = `${opacityValue}`;
    });
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const collectionPath = title
      .toLowerCase()
      .replace(" collection", "")
      .replace(/\s+/g, "-");

    onClick();
    setIsClicked(true);

    // Set opacity to 0 immediately on click
    if (cardContainerRefs.current[current]) {
      cardContainerRefs.current[current]!.style.opacity = "0";
    }

    setTimeout(() => {
      window.history.pushState({}, "", `/collections/${collectionPath}`);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }, 2000);
  };

  return (
    <div className={classNames("section", { sectionShop: isShop })}>
      <div
        className={classNames("card-container", {
          cardContainerClicked: isClicked,
        })}
        ref={(el) => {
          cardContainerRefs.current[current] = el;
        }}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <img src={img} alt={title} />
        <div className="card">
          <h3>{title}</h3>
          <p className="card-description">{description}</p>

          <StartBorder
            className={buttonStyles.buttonLayout}
            as="button"
            type="submit"
            color="white"
            speed="5s"
          >
            <p>Click to Explore</p>
          </StartBorder>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Section;
