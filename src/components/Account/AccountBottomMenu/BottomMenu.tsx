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
  const touchStartX = useRef<number>(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const isSwipingRef = useRef(false);

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
    isSwipingRef.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwipingRef.current || !menuRef.current) return;

    const touchCurrentX = e.touches[0].clientX;
    const diffX = touchCurrentX - touchStartX.current;

    // Prevent default only for horizontal swipes
    if (Math.abs(diffX) > 10) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isSwipingRef.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    const currentIndex = MENU_ITEMS.findIndex((item) => item.id === currentTab);

    // Only switch tabs if swipe is significant enough
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex > 0) {
        // Swipe right - go to previous tab
        handleTabChange(MENU_ITEMS[currentIndex - 1].id);
      } else if (diff < 0 && currentIndex < MENU_ITEMS.length - 1) {
        // Swipe left - go to next tab
        handleTabChange(MENU_ITEMS[currentIndex + 1].id);
      }
    }

    isSwipingRef.current = false;
  };

  return (
    <div className={styles.bottomMenuContainer}>
      <div className={styles.bottomMenuBorder} />
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
