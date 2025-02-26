import { Scroll } from "@react-three/drei";
import { AccountProps } from "../../pages/account/account";
import classNames from "classnames";
import { IoIosSettings } from "react-icons/io";
import { RiAccountCircleFill, RiLogoutBoxRLine } from "react-icons/ri";
import {
  MdShoppingCartCheckout,
  MdOutlineEditLocationAlt,
} from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import styles from "./AccountDesktop.module.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const AccountDesktop = ({
  currentTab,
  handleTabChange,
  userProfileImage: defaultUserProfileImage,
  logout,
  renderCurrentTab,
}: AccountProps) => {
  const { currentUser } = useContext(UserContext);

  // Use Google profile picture if available
  const userProfileImage = currentUser?.photoURL || defaultUserProfileImage;
  const currentUserName = currentUser?.displayName || "User";

  const tabs = [
    { id: "myDetails", label: "My Details", icon: <RiAccountCircleFill /> },
    {
      id: "myAddresses",
      label: "My Addresses",
      icon: <MdOutlineEditLocationAlt />,
    },
    { id: "myOrders", label: "My Orders", icon: <MdShoppingCartCheckout /> },
    { id: "myFavorites", label: "My Favorites", icon: <FaHeart /> },
    { id: "mySettings", label: "Settings", icon: <IoIosSettings /> },
  ];

  return (
    <Scroll html>
      <div className={styles.accountDesktop}>
        <div className={styles.accountDesktopContent}>
          <div className={styles.sidebar}>
            <div>
              <div className={styles.userInfo}>
                <div className={styles.userImage}>
                  <img src={userProfileImage} alt={currentUserName} />
                </div>
                <h2 className={styles.userName}>{currentUserName}</h2>
              </div>
              <div className={styles.tabs}>
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={classNames(styles.tab, {
                      [styles.activeTab]: currentTab === tab.id,
                    })}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.logoutTab}>
              <div className={styles.tab} onClick={logout}>
                <RiLogoutBoxRLine className={styles.logoutIcon} />
                <span>Logout</span>
              </div>
            </div>
          </div>
          <div className={styles.mainContent}>{renderCurrentTab()}</div>
        </div>
      </div>
    </Scroll>
  );
};

export default AccountDesktop;
