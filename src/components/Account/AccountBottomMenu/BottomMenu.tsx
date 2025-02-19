import { FaHeart } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdShoppingCartCheckout } from "react-icons/md";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import classNames from "classnames";
import styles from "./BottomMenu.module.css";
import { ReactNode } from "react";

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

  return (
    <div className={styles.bottomMenuContainer}>
      <div
        className={classNames(
          styles.bottomMenuBorder,
          getPositionClass(getCurrentPosition())
        )}
      />
      <ul
        className={classNames(
          styles.bottomMenu,
          getPositionClass(getCurrentPosition())
        )}
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
