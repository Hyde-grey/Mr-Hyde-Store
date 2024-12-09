import { RefObject, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import "./Section.css";

type SectionProps = {
  img: string;
  title: string;
  description: string;
  current: number;
};

const Section = ({ img, title, description, current }: SectionProps) => {
  const cardContainerRefs = useRef<RefObject<HTMLDivElement>[]>([]);

  useFrame(() => {
    const viewportHeight = window.innerHeight;

    cardContainerRefs.current.forEach((ref) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementCenterY = rect.top + rect.height / 2;
        const viewportCenterY = viewportHeight / 2;
        const distanceFromCenter = Math.abs(viewportCenterY - elementCenterY);

        // Calculate opacity value based on distance from center
        const maxOpacity = 1;
        const opacityValue = Math.max(
          maxOpacity - (distanceFromCenter / viewportHeight) * maxOpacity,
          0
        );

        ref.current.style.opacity = `${opacityValue}`;
      }
    });
  });

  return (
    <div className="section">
      <div
        className="card-container"
        ref={(el) =>
          el && (cardContainerRefs.current[current] = { current: el })
        }
      >
        <img src={img} alt={title} />
        <div className="card">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
