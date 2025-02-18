import { Scroll } from "@react-three/drei";
import { AccountProps } from "../../pages/account/account";

import styles from "./AccountMobile.module.css";

type AccountMobileProps = AccountProps;

const AccountMobile = ({ renderCurrentTab }: AccountMobileProps) => {
  return (
    <Scroll html>
      <div className={styles.accountMobile}>
        <div className={styles.accountMobileContent}>{renderCurrentTab()}</div>
      </div>
    </Scroll>
  );
};

export default AccountMobile;
