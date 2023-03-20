import { getIngredients } from "../../utils/func";
import "./index.scss";

const Card = ({ data }) => {
  return (
    <div className="Card">
      <img
        src={data.strDrinkThumb}
        alt={data.strDrink}
        className="Card__image"
      />
      <div className="Card__text">
        <h3>{data.strDrink}</h3>
        <ul>
          {getIngredients(data, "strIngredient").map((ingredient) => (
            <li key={ingredient[0]}>{ingredient[1]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
