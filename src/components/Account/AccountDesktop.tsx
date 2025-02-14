import { Scroll } from "@react-three/drei";
import { IoIosSettings } from "react-icons/io";
import { RiAccountCircleFill, RiLogoutBoxRLine } from "react-icons/ri";
import styles from "./AccountDesktop.module.css";
import classNames from "classnames";
import { MdShoppingCartCheckout } from "react-icons/md";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

type AccountDesktopProps = {
  currentUserName: string;
  currentTab: string;
  handleTabChange: (tab: string) => void;
  userProfileImage: string;
  logout: () => void;
  renderCurrentTab: () => React.ReactNode;
};

const AccountDesktop = ({
  currentUserName,
  currentTab,
  handleTabChange,
  userProfileImage,
  logout,
  renderCurrentTab,
}: AccountDesktopProps) => {
  return (
    <Scroll html>
      <div className={styles.accountPageContainer}>
        <div className={styles.sectionLayoutContainer}>
          <div className={classNames(styles.leftColumn, styles.column)}>
            <div className={styles.userProfileContainer}>
              <img src={userProfileImage} alt="user profile" />
              <p>{currentUserName}</p>
            </div>

            <ul>
              <li
                className={classNames(
                  styles.tab,
                  currentTab === "myDetails" && styles.activeTab
                )}
                onClick={() => handleTabChange("myDetails")}
              >
                <RiAccountCircleFill /> <p>My details</p>
              </li>
              <li
                className={classNames(
                  styles.tab,
                  currentTab === "myOrders" && styles.activeTab
                )}
                onClick={() => handleTabChange("myOrders")}
              >
                <MdShoppingCartCheckout />
                <p>My orders</p>
              </li>
              <li
                className={classNames(
                  styles.tab,
                  currentTab === "myAddresses" && styles.activeTab
                )}
                onClick={() => handleTabChange("myAddresses")}
              >
                <MdOutlineEditLocationAlt />
                <p>Addresses</p>
              </li>
              <li
                className={classNames(
                  styles.tab,
                  currentTab === "myFavorites" && styles.activeTab
                )}
                onClick={() => handleTabChange("myFavorites")}
              >
                <FaHeart />
                <p>Favorites</p>
              </li>
              <li
                className={classNames(
                  styles.tab,
                  currentTab === "mySettings" && styles.activeTab
                )}
                onClick={() => handleTabChange("mySettings")}
              >
                <IoIosSettings /> <p>Settings</p>
              </li>
            </ul>
            <div className={styles.logoutContainer} onClick={logout}>
              <RiLogoutBoxRLine />
              <span>Logout</span>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.section}>{renderCurrentTab()}</div>
          </div>
        </div>
      </div>
    </Scroll>
  );
};

export default AccountDesktop;
