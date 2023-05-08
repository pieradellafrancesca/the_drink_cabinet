import { getRecipe } from "../../utils/func";
import styles from "./index.module.scss";

const ModalItem = ({ data, setModalContext, filteredList }) => {
  const onHandleClose = () => {
    setModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  const onHandleNextBtn = () => {
    setModalContext(
      (prev) =>
        prev.positionList < filteredList.length - 1 && {
          ...prev,
          payload: filteredList[prev.positionList + 1],
          positionList: prev.positionList + 1,
        }
    );
  };

  const onHandlePreviousBtn = () => {
    setModalContext(
      (prev) =>
        prev.positionList > 0 && {
          ...prev,
          payload: filteredList[prev.positionList - 1],
          positionList: prev.positionList - 1,
        }
    );
  };

  return (
    <div className={styles.ModalItem}>
      <div className={styles.image}>
        <img src={data.payload.strDrinkThumb} alt={data.payload.strDrink} />
        <div className={styles.carousel}>
          <button onClick={onHandlePreviousBtn}>Previous</button>
          <button onClick={onHandleNextBtn}>Next</button>
        </div>
      </div>
      <div className={styles.text}>
        <p className={styles.iba}>{data.payload.strIBA}</p>
        <h1>{data.payload.strDrink}</h1>
        <ul>
          <h3>Ingredients:</h3>
          {getRecipe(data.payload, "strIngredient", "strMeasure").map((line) =>
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
        <p>{data.payload.strInstructions}</p>
        <hr />
        <ul>
          <h3>Glass:</h3>
          <li>{data.payload.strGlass}</li>
        </ul>
      </div>
      <button className={styles.close} onClick={onHandleClose}>
        ✖
      </button>
    </div>
  );
};

export default ModalItem;
