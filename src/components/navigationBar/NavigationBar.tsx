import { RiAccountCircleLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="nav-bar-container">
      <ul className="nav-bar-items">
        <li>+ Collection</li>
      </ul>
      <span className="logo nav-bar-items">Mr. Hyde Store</span>
      <ul className="nav-bar nav-bar-items">
        <li>
          <RiAccountCircleLine />
        </li>
        <li>
          <FiHeart />
        </li>
        <li>
          <PiShoppingCartLight />
        </li>
        <li>
          <RxHamburgerMenu />
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
