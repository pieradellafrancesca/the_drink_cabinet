import { getRecipe } from "../../utils/func";
import "./index.scss";

const ModalItem = ({ data, setModalContext }) => {
  const onHandleClose = () => {
    setModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  return (
    <div className="ModalItem">
      <div className="ModalItem__image">
        <img src={data.strDrinkThumb} alt="" />
        <div className="ModalItem__image--carousel">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
      <div className="ModalItem__text">
        <p className="ModalItem__text--iba">{data.strIBA}</p>
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
      <button className="ModalItem__close" onClick={onHandleClose}>
        X
      </button>
    </div>
  );
};

export default ModalItem;
