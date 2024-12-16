import classNames from "classnames";
import { HiHome } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import styles from "./styles.module.css";
import { useMenuContext } from "../../contexts/MenuContext";
import { useState } from "react";

const Menu = () => {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const { isMenuOpen } = useMenuContext();

  const collectionDisplayHandler = () => {
    setIsCollectionOpen(!isCollectionOpen);
    console.log("collectionn has been clicked", isCollectionOpen);
  };

  return (
    <>
      <div
        className={classNames(styles.overlay, {
          [styles.overlayIsOpened]: isMenuOpen,
        })}
      >
        <div
          className={classNames(styles.menuContainer, {
            [styles.menuIsOpened]: isMenuOpen,
          })}
        >
          <div className={classNames(styles.menuLogo)}>
            <span>Mr. Hyde Store</span>
          </div>
          <ul>
            <li>
              <HiHome className={classNames(styles.icons)} /> Home
            </li>
            <li>
              <MdAccountCircle className={classNames(styles.icons)} />
              My Account
            </li>
            <li>
              <MdFavorite className={classNames(styles.icons)} />
              Favorites
            </li>
            <li>
              <FaShoppingCart className={classNames(styles.icons)} />
              Cart
            </li>
            <li onClick={() => collectionDisplayHandler()}>
              <AiOutlinePlusCircle className={classNames(styles.icons)} />
              Collections
            </li>
            <li
              className={classNames(styles.collectionMenu, {
                [styles.collectionDisplay]: isCollectionOpen,
              })}
            >
              <ul
                className={classNames(styles.collectionMenu, {
                  [styles.collectionDisplay]: isCollectionOpen,
                })}
              >
                <li>ChromeHeart Collection</li>
                <li>Darker Than Black Collection</li>
                <li>Faithless Collection</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <FaPhone className={classNames(styles.icons)} />
              Contact Us
            </li>
            <li>
              <FiLogOut className={classNames(styles.icons, styles.logout)} />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
