import styles from "./index.module.scss";

const HamburgerMenu = ({ showCategory }) => {
  return (
    <div className={`${styles.HamburgerMenu} ${!showCategory && styles.show}`}>
      <ul className={styles.hamburgerMenuList}>
        <li>home</li>
        <li>our products</li>
        <li>about</li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
