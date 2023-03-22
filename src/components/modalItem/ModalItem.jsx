import { getRecipe } from "../../utils/func";
import styles from "./index.module.scss";

const ModalItem = ({ data, setModalContext }) => {
  const onHandleClose = () => {
    setModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  return (
    <div className={styles.ModalItem}>
      <div className={styles.image}>
        <img src={data.strDrinkThumb} alt="" />
        <div className={styles.carousel}>
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
      <div className={styles.text}>
        <p className={styles.iba}>{data.strIBA}</p>
        <h1>{data.strDrink}</h1>
        <ul>
          <h3>Ingredients:</h3>
          {getRecipe(data, "strIngredient", "strMeasure").map((line) =>
            line[1] ? (
              <li key={line[0][0]}>
                {line[0][1]} - {line[1][1]}
              </li>
            ) : (
              <li key={line[0][0]}>{line[0][1]}</li>
            )
          )}
        </ul>

        <hr />
        <p>{data.strInstructions}</p>
        <hr />
        <ul>
          <h3>Glass:</h3>
          <li>{data.strGlass}</li>
        </ul>
      </div>
      <button className={styles.close} onClick={onHandleClose}>
        X
      </button>
    </div>
  );
};

export default ModalItem;
