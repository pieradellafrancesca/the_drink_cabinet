import "./index.scss";

const Card = ({ data }) => {
  const getIngredients = () => {
    const entries = Object.entries(data);
    // console.log(entries);
    const filteredEntries = entries.filter(
      ([key, value]) => key.includes("strIngredient") && value !== null
    );
    // console.log(filteredEntries);
    return filteredEntries;
  };

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
          {getIngredients().map((entry, index) => (
            <li key={index}>{entry[1]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
