import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import appLogo from "../../../src/assets/logoipsum.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./index.module.scss";

const Navbar = ({ setReservetionVisibility }) => {
  const [showCategory, setShowCategory] = useState(false);
  const onHandleCategory = () => {
    setShowCategory((prev) => !prev);
  };

  const onHandleReservation = () => {
    setReservetionVisibility(true);
  };

  return (
    <div className={styles.Navbar}>
      <img src={appLogo} className={styles.logo} alt="App logo" />
      <ul className={styles.homepageList}>
        <li>home</li>
        <li>our products</li>
        <li>about</li>
      </ul>
      <button onClick={onHandleReservation}>Reserve</button>
      <GiHamburgerMenu
        className={styles.hamburgerIcon}
        onClick={onHandleCategory}
      />
      <HamburgerMenu
        showCategory={showCategory}
        setReservetionVisibility={setReservetionVisibility}
      />
    </div>
  );
};

export default Navbar;
