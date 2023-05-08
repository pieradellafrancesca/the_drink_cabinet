import styles from "./index.module.scss";

const HamburgerMenu = ({ showCategory, setReservetionVisibility }) => {
  const onHandleReservation = () => {
    setReservetionVisibility(true);
  };
  return (
    <div className={`${styles.HamburgerMenu} ${!showCategory && styles.show}`}>
      <ul className={styles.hamburgerMenuList}>
        <li>home</li>
        <li>our products</li>
        <li>about</li>
        <li onClick={onHandleReservation}>RESERVE</li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
