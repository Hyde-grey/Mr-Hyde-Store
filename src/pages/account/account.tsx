import MainCanvas from "../../components/MainCanvas/MainCanvas.tsx";

import { GearAnimatedModel } from "../../components/models/GearAnimated";
import userProfileImage from "../../assets/images/user-profile-image.png";

import { UserContext } from "../../contexts/UserContext.tsx";
import { useContext, useEffect, useState } from "react";
import { useLogout } from "../../hooks/useLogOut.tsx";
import AccountDesktop from "../../components/Account/AccountDesktop.tsx";
import useScreenSize from "../../hooks/useScreenSize.tsx";
import AccountMobile from "../../components/Account/AccountMobile.tsx";
import { useAccountTabs } from "../../hooks/useAccountTabs";

export type AccountProps = {
  currentUserName: string;
  currentTab: string;
  handleTabChange: (tab: string) => void;
  userProfileImage: string;
  logout: () => void;
  renderCurrentTab: () => React.ReactNode;
};

const AccountPage = () => {
  const { currentUser } = useContext(UserContext);
  const [currentUserName, setCurrentUserName] = useState("");
  const { logout } = useLogout();
  const { isMobile } = useScreenSize();
  const { currentTab, handleTabChange, renderCurrentTab } =
    useAccountTabs(currentUser);

  useEffect(() => {
    if (currentUser?.displayName) {
      setCurrentUserName(currentUser.displayName);
    }
  }, [currentUser]);

  const sharedProps: AccountProps = {
    currentUserName,
    currentTab,
    handleTabChange,
    userProfileImage,
    logout,
    renderCurrentTab,
  };

  return (
    <MainCanvas numberOfPages={1}>
      <GearAnimatedModel />
      {isMobile ? (
        <AccountMobile {...sharedProps} />
      ) : (
        <AccountDesktop {...sharedProps} />
      )}
    </MainCanvas>
  );
};

export default AccountPage;
