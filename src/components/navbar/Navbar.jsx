import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import appLogo from "../../../src/assets/logoipsum.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./index.module.scss";

const Navbar = ({ endpoint, setCategory }) => {
  const [showCategory, setShowCategory] = useState(true);
  const onHandleClick = () => {
    setShowCategory((prev) => !prev);
  };

  return (
    <div className={styles.Navbar}>
      <img src={appLogo} className={styles.logo} alt="App logo" />
      <ul>
        <li>home</li>
        <li>about</li>
        <li>our products</li>
        <li>technical support</li>
      </ul>
      <GiHamburgerMenu className={styles.hamburger} onClick={onHandleClick} />
      <HamburgerMenu
        showCategory={showCategory}
        endpoint={endpoint}
        setCategory={setCategory}
      />
    </div>
  );
};

export default Navbar;
