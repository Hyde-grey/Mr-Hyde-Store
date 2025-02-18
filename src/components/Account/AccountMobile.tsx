import { Scroll } from "@react-three/drei";
import { AccountProps } from "../../pages/account/account";
import BottomMenu from "./AccountBottomMenu/BottomMenu";
import styles from "./AccountMobile.module.css";

type AccountMobileProps = AccountProps;

const AccountMobile = ({
  currentTab,
  handleTabChange,
  renderCurrentTab,
}: AccountMobileProps) => {
  return (
    <Scroll html>
      <div className={styles.accountMobile}>
        <div className={styles.accountMobileContent}>{renderCurrentTab()}</div>
      </div>
      <BottomMenu currentTab={currentTab} handleTabChange={handleTabChange} />
    </Scroll>
  );
};

export default AccountMobile;
