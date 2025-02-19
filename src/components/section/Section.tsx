import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import "./Section.css";
import classNames from "classnames";

type SectionProps = {
  img: string;
  title: string;
  description: string;
  current: number;
  children?: React.ReactNode;
};

const Section = ({
  img,
  title,
  description,
  current,
  children,
}: SectionProps) => {
  const cardContainerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isShop, setIsShop] = useState(false);

  useEffect(() => {
    if (location.pathname === "/shop") {
      setIsShop(true);
    }
  }, [location.pathname]);

  useFrame(() => {
    const viewportHeight = window.innerHeight;

    cardContainerRefs.current.forEach((ref) => {
      if (!ref) return;

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
    window.history.pushState({}, "", "/shop");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className={classNames("section", { sectionShop: isShop })}>
      <div
        className="card-container"
        ref={(el) => {
          cardContainerRefs.current[current] = el;
        }}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <img src={img} alt={title} />
        <div className="card">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Section;
