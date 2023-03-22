import CategoryList from "../categoryList";
import styles from "./index.module.scss";

const HamburgerMenu = ({ showCategory, endpoint, setCategory }) => {
  return (
    <div className={`${styles.HamburgerMenu} ${showCategory && styles.show}`}>
      <CategoryList endpoint={endpoint} setCategory={setCategory} />
    </div>
  );
};

export default HamburgerMenu;
