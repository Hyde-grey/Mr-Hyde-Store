import { FaHeart } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdShoppingCartCheckout } from "react-icons/md";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import classNames from "classnames";
import styles from "./BottomMenu.module.css";
import { ReactNode, useRef } from "react";

type BottomMenuProps = {
  currentTab: string;
  handleTabChange: (tab: string) => void;
};

type MenuItem = {
  id: string;
  icon: ReactNode;
  position: number;
};

// Arrange items so myDetails is in the center (position 3)
const MENU_ITEMS: MenuItem[] = [
  {
    id: "myAddresses",
    icon: <MdOutlineEditLocationAlt />,
    position: 1,
  },
  {
    id: "myOrders",
    icon: <MdShoppingCartCheckout />,
    position: 2,
  },
  {
    id: "myDetails",
    icon: <RiAccountCircleFill />,
    position: 3, // Center position
  },
  {
    id: "myFavorites",
    icon: <FaHeart />,
    position: 4,
  },
  {
    id: "mySettings",
    icon: <IoIosSettings />,
    position: 5,
  },
];

const BottomMenu = ({ currentTab, handleTabChange }: BottomMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const isSwipingRef = useRef(false);
  const swipeDirectionRef = useRef<"horizontal" | "vertical" | null>(null);

  const getPositionClass = (position: number) => {
    switch (position) {
      case 1:
        return styles.firstItemActive;
      case 2:
        return styles.secondItemActive;
      case 3:
        return styles.thirdItemActive;
      case 4:
        return styles.fourthItemActive;
      case 5:
        return styles.fifthItemActive;
      default:
        return "";
    }
  };

  const getCurrentPosition = () => {
    const currentItem = MENU_ITEMS.find((item) => item.id === currentTab);
    return currentItem ? getPositionClass(currentItem.position) : "";
  };

  const getTabClass = (itemId: string) => {
    if (itemId === currentTab) return styles.activeTab;

    const currentIndex = MENU_ITEMS.findIndex((item) => item.id === currentTab);
    const itemIndex = MENU_ITEMS.findIndex((item) => item.id === itemId);
    const distance = Math.abs(currentIndex - itemIndex);

    return distance === 1 ? styles.secondaryTab : "";
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwipingRef.current = true;
    swipeDirectionRef.current = null;

    // Reset any inline styles
    if (menuRef.current) menuRef.current.style.transform = "";
    if (borderRef.current) borderRef.current.style.transform = "";
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwipingRef.current || !menuRef.current || !borderRef.current) return;

    const touchCurrentX = e.touches[0].clientX;
    const touchCurrentY = e.touches[0].clientY;
    const diffX = touchCurrentX - touchStartX.current;
    const diffY = touchCurrentY - touchStartY.current;

    // Determine swipe direction if not already set
    if (!swipeDirectionRef.current) {
      const absX = Math.abs(diffX);
      const absY = Math.abs(diffY);
      if (absX > absY && absX > 10) {
        swipeDirectionRef.current = "horizontal";
      } else if (absY > absX && absY > 10) {
        swipeDirectionRef.current = "vertical";
        isSwipingRef.current = false;
        return;
      }
    }

    // Only handle horizontal swipes
    if (swipeDirectionRef.current === "horizontal") {
      const currentIndex = MENU_ITEMS.findIndex(
        (item) => item.id === currentTab
      );
      const isAtStart = currentIndex === 0 && diffX > 0;
      const isAtEnd = currentIndex === MENU_ITEMS.length - 1 && diffX < 0;
      const resistance = isAtStart || isAtEnd ? 0.2 : 1;

      const transform = `translateX(calc(-50% + ${diffX * resistance}px))`;
      menuRef.current.style.transform = transform;
      borderRef.current.style.transform = transform;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isSwipingRef.current || !menuRef.current || !borderRef.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    const currentIndex = MENU_ITEMS.findIndex((item) => item.id === currentTab);

    // Reset states and styles
    isSwipingRef.current = false;
    swipeDirectionRef.current = null;
    menuRef.current.style.transform = "";
    borderRef.current.style.transform = "";

    // If the swipe was long enough, switch tabs
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex > 0) {
        // Swipe right - go to previous tab
        handleTabChange(MENU_ITEMS[currentIndex - 1].id);
      } else if (diff < 0 && currentIndex < MENU_ITEMS.length - 1) {
        // Swipe left - go to next tab
        handleTabChange(MENU_ITEMS[currentIndex + 1].id);
      }
    }
  };

  return (
    <div className={styles.bottomMenuContainer}>
      <div
        ref={borderRef}
        className={classNames(styles.bottomMenuBorder, getCurrentPosition())}
      />
      <div
        ref={menuRef}
        className={classNames(styles.bottomMenu, getCurrentPosition())}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {MENU_ITEMS.map((item) => (
          <div
            key={item.id}
            className={classNames(styles.tab, getTabClass(item.id))}
            onClick={() => handleTabChange(item.id)}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomMenu;
