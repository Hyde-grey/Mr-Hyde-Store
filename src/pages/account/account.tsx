import { Scroll } from "@react-three/drei";
import MainCanvas from "../../components/MainCanvas/MainCanvas.tsx";
import styles from "./account.module.css";
import { GearAnimatedModel } from "../../components/models/GearAnimated";
import userProfileImage from "../../assets/images/user-profile-image.png";
import { RiAccountCircleFill, RiLogoutBoxRLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import {
  MdOutlineEditLocationAlt,
  MdShoppingCartCheckout,
} from "react-icons/md";
import classNames from "classnames";
import { UserContext } from "../../contexts/UserContext.tsx";
import { useContext, useEffect, useState } from "react";
import MyDetails from "../../components/MyDetails/MyDetails.tsx";
import { useLogout } from "../../hooks/useLogOut.tsx";

const AccountPage = () => {
  const { currentUser } = useContext(UserContext);
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentTab, setCurrentTab] = useState("myDetails");
  const { logout } = useLogout();

  useEffect(() => {
    if (currentUser) {
      setCurrentUserName(currentUser.displayName || "");
    }
  }, [currentUser]);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  const renderCurrentTab = () => {
    switch (currentTab) {
      case "myDetails":
        return currentUser ? <MyDetails user={currentUser} /> : null;
      case "myOrders":
        return <div>My Orders</div>;
      case "myAddresses":
        return <div>My Addresses</div>;
      case "myWishlist":
        return <div>My Wishlist</div>;
      case "mySettings":
        return <div>My Settings</div>;
      default:
        return null;
    }
  };

  return (
    <MainCanvas numberOfPages={1}>
      <GearAnimatedModel />
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
                    currentTab === "myWishlist" && styles.activeTab
                  )}
                  onClick={() => handleTabChange("myWishlist")}
                >
                  <FaHeart />
                  <p>Wishlist</p>
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
    </MainCanvas>
  );
};

export default AccountPage;
