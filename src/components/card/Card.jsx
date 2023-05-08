import { useState } from "react";
import { getInfo } from "../../utils/func";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "./index.module.scss";

const Card = ({ data, setModalContext }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const onHandleClick = () => {
    setModalContext((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
      positionList: data.positionList,
    }));
  };

  const onHandleFavourite = () => {
    setIsFavourite((prev) => !prev);
  };

  return (
    <div className={styles.Card}>
      {isFavourite ? (
        <AiFillHeart className={styles.favourite} onClick={onHandleFavourite} />
      ) : (
        <AiOutlineHeart className={styles.heart} onClick={onHandleFavourite} />
      )}

      <img
        src={data.strDrinkThumb}
        alt={data.strDrink}
        className={styles.image}
      />
      <div className={styles.text} onClick={onHandleClick}>
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
