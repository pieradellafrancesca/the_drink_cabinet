import CategoryList from "../categoryList/CategoryList";
import styles from "./index.module.scss";

const Hero = ({ endpoint, setCategory }) => {
  return (
    <div className={styles.Hero}>
      <div className={styles.text}>
        <h1>The Drink Cabinet</h1>
        <h4>Cocktails created from a lifetime of passion.</h4>
      </div>
      <img
        src="https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        // src="https://images.pexels.com/photos/4295/black-and-white-alcohol-bar-drinks.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="hero image"
      />
      <div className={styles.catList}>
        <CategoryList endpoint={endpoint} setCategory={setCategory} />
      </div>
    </div>
  );
};

export default Hero;
