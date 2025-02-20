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
  const menuRef = useRef<HTMLUListElement>(null);

  const getPositionClass = (position: number) => {
    const positionClasses = {
      1: styles.firstItemActive,
      2: styles.secondItemActive,
      3: styles.thirdItemActive,
      4: styles.fourthItemActive,
      5: styles.fifthItemActive,
    };
    return positionClasses[position as keyof typeof positionClasses];
  };

  const getCurrentPosition = () => {
    const currentItem = MENU_ITEMS.find((item) => item.id === currentTab);
    return currentItem ? currentItem.position : 3; // Default to center position
  };

  const getTabClass = (itemId: string) => {
    const isActive = currentTab === itemId;
    const currentPosition = getCurrentPosition();
    const itemPosition =
      MENU_ITEMS.find((item) => item.id === itemId)?.position || 3;
    const isAdjacent = Math.abs(currentPosition - itemPosition) === 1;

    return classNames(styles.tab, {
      [styles.activeTab]: isActive,
      [styles.secondaryTab]: isAdjacent,
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!menuRef.current) return;

    const touchCurrentX = e.touches[0].clientX;
    const diff = touchCurrentX - touchStartX.current;
    const containerWidth = menuRef.current.offsetWidth;

    // Calculate percentage moved
    const percentMoved = (diff / containerWidth) * 100;

    // Add resistance to the swipe
    const resistance = Math.min(Math.abs(percentMoved) / 100, 1);
    const currentPosition = getCurrentPosition();

    // Prevent swiping if at the edges
    if (currentPosition === 1 && diff > 0) return; // First item, prevent right swipe
    if (currentPosition === 5 && diff < 0) return; // Last item, prevent left swipe

    menuRef.current.style.transform = `translateX(${diff * resistance}px)`;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!menuRef.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    const currentPosition = getCurrentPosition();

    // Reset the inline style
    menuRef.current.style.transform = "";

    // If the swipe was long enough, switch tabs
    if (Math.abs(diff) > 50) {
      const sortedItems = MENU_ITEMS.sort((a, b) => a.position - b.position);
      const currentIndex = sortedItems.findIndex(
        (item) => item.id === currentTab
      );

      if (diff < 0 && currentPosition < 5) {
        // Swipe left
        handleTabChange(sortedItems[currentIndex + 1].id);
      } else if (diff > 0 && currentPosition > 1) {
        // Swipe right
        handleTabChange(sortedItems[currentIndex - 1].id);
      }
    }
  };

  return (
    <div className={styles.bottomMenuContainer}>
      <div
        className={classNames(
          styles.bottomMenuBorder,
          getPositionClass(getCurrentPosition())
        )}
      />
      <ul
        ref={menuRef}
        className={classNames(
          styles.bottomMenu,
          getPositionClass(getCurrentPosition())
        )}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {MENU_ITEMS.sort((a, b) => a.position - b.position).map((item) => (
          <li
            key={item.id}
            className={getTabClass(item.id)}
            onClick={() => handleTabChange(item.id)}
          >
            {item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomMenu;
