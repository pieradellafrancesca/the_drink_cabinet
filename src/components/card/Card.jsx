import { getInfo } from "../../utils/func";
import "./index.scss";

const Card = ({ data, setModalContext }) => {
  const onHandleClick = () => {
    setModalContext((prev) => ({ ...prev, payload: data, isVisible: true }));
  };

  return (
    <div className="Card" onClick={onHandleClick}>
      <img
        src={data.strDrinkThumb}
        alt={data.strDrink}
        className="Card__image"
      />
      <div className="Card__text">
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
