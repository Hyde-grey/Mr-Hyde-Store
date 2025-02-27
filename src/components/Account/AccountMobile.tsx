import { Scroll } from "@react-three/drei";
import { AccountProps } from "../../pages/account/account";
import BottomMenu from "./AccountBottomMenu/BottomMenu";
import styles from "./AccountMobile.module.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

type AccountMobileProps = AccountProps;

const AccountMobile = ({
  currentTab,
  handleTabChange,
  userProfileImage: defaultUserProfileImage,
  renderCurrentTab,
}: AccountMobileProps) => {
  const { currentUser } = useContext(UserContext);

  // Use Google profile picture if available
  const userProfileImage = currentUser?.photoURL || defaultUserProfileImage;
  const currentUserName = currentUser?.displayName || "User";

  return (
    <Scroll html>
      <div className={styles.accountMobile}>
        <div className={styles.accountMobileContent}>
          <div className={styles.userInfo}>
            <div className={styles.userImage}>
              <img src={userProfileImage} alt={currentUserName} />
            </div>
          </div>
          {renderCurrentTab()}
        </div>
        <BottomMenu currentTab={currentTab} handleTabChange={handleTabChange} />
      </div>
    </Scroll>
  );
};

export default AccountMobile;
