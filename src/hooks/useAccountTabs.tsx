import { useState } from "react";
import { User } from "firebase/auth";
import MyDetails from "../components/MyDetails/MyDetails";

type TabContent = {
  [key: string]: (user: User | null) => React.ReactNode;
};

export const useAccountTabs = (currentUser: User | null) => {
  const [currentTab, setCurrentTab] = useState<string>("myDetails");

  const tabContent: TabContent = {
    myAddresses: () => <div>My Addresses</div>,
    myOrders: () => <div>My Orders</div>,
    myDetails: (user) => (user ? <MyDetails user={user} /> : null),
    myFavorites: () => <div>My Favorites</div>,
    mySettings: () => <div>My Settings</div>,
  };

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  const renderCurrentTab = () => {
    const renderer = tabContent[currentTab];
    return renderer ? renderer(currentUser) : null;
  };

  return {
    currentTab,
    handleTabChange,
    renderCurrentTab,
  };
};
