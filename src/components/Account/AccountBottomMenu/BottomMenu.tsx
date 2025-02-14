import { FaHeart } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import classNames from "classnames";
import styles from "./BottomMenu.module.css";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdShoppingCartCheckout } from "react-icons/md";
import { MdOutlineEditLocationAlt } from "react-icons/md";

type BottomMenuProps = {
  currentTab: string;
  handleTabChange: (tab: string) => void;
};

const BottomMenu = ({ currentTab, handleTabChange }: BottomMenuProps) => {
  return (
    <>
      <div
        className={classNames(
          styles.bottomMenuBorder,
          currentTab === "myDetails"
            ? styles.firstItemActive
            : currentTab === "myOrders"
              ? styles.secondItemActive
              : currentTab === "myAddresses"
                ? styles.thirdItemActive
                : currentTab === "myFavorites"
                  ? styles.fourthItemActive
                  : styles.fifthItemActive
        )}
      ></div>
      <ul
        className={classNames(
          styles.bottomMenu,
          currentTab === "myDetails"
            ? styles.firstItemActive
            : currentTab === "myOrders"
              ? styles.secondItemActive
              : currentTab === "myAddresses"
                ? styles.thirdItemActive
                : currentTab === "myFavorites"
                  ? styles.fourthItemActive
                  : styles.fifthItemActive
        )}
      >
        <li
          className={classNames(
            styles.tab,
            currentTab === "myDetails" && styles.activeTab,
            currentTab === "myOrders" && styles.secondaryTab
          )}
          onClick={() => handleTabChange("myDetails")}
        >
          <RiAccountCircleFill />
        </li>
        <li
          className={classNames(
            styles.tab,
            currentTab === "myOrders" && styles.activeTab,
            currentTab === "myDetails" && styles.secondaryTab,
            currentTab === "myAddresses" && styles.secondaryTab
          )}
          onClick={() => handleTabChange("myOrders")}
        >
          <MdShoppingCartCheckout />
        </li>
        <li
          className={classNames(
            styles.tab,
            currentTab === "myAddresses" && styles.activeTab,
            currentTab === "myFavorites" && styles.secondaryTab,
            currentTab === "myOrders" && styles.secondaryTab
          )}
          onClick={() => handleTabChange("myAddresses")}
        >
          <MdOutlineEditLocationAlt />
        </li>
        <li
          className={classNames(
            styles.tab,
            currentTab === "myFavorites" && styles.activeTab,
            currentTab === "mySettings" && styles.secondaryTab,
            currentTab === "myAddresses" && styles.secondaryTab
          )}
          onClick={() => handleTabChange("myFavorites")}
        >
          <FaHeart />
        </li>
        <li
          className={classNames(
            styles.tab,
            currentTab === "mySettings" && styles.activeTab,
            currentTab === "myFavorites" && styles.secondaryTab
          )}
          onClick={() => handleTabChange("mySettings")}
        >
          <IoIosSettings />
        </li>
      </ul>
    </>
  );
};

export default BottomMenu;
