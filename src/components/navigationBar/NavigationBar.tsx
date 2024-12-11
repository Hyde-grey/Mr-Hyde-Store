import { Link } from "react-router-dom";
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
      <span className="logo nav-bar-items">
        <Link to="/" className="nav-link">
          Mr. Hyde Store
        </Link>
      </span>
      <ul className="nav-bar nav-bar-items">
        <Link to="/" className="nav-link">
          <li>
            <RiAccountCircleLine /> <p>Log-in</p>
          </li>
        </Link>
        <Link to="/" className="nav-link">
          <li>
            <FiHeart /> <p>Favorite</p>
          </li>
        </Link>
        <Link to="/" className="nav-link">
          <li>
            <PiShoppingCartLight /> <p>Cart</p>
          </li>
        </Link>
        <Link to="/" className="nav-link">
          <li>
            <RxHamburgerMenu /> <p>Menu</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavigationBar;
