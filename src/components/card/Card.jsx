import { getInfo } from "../../utils/func";
import styles from "./index.module.scss";

const Card = ({ data, setModalContext }) => {
  const onHandleClick = () => {
    setModalContext((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
      positionList: data.positionList,
    }));
  };

  return (
    <div className={styles.Card} onClick={onHandleClick}>
      <img
        src={data.strDrinkThumb}
        alt={data.strDrink}
        className={styles.image}
      />
      <div className={styles.text}>
        <h3>{data.strDrink}</h3>
        <ul>
          {getInfo(data, "strIngredient").map((ingredient) => (
            <li key={ingredient[0]}>{ingredient[1]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
