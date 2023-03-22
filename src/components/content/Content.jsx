// import { useState, useEffect } from "react";
// import { GET } from "../../utils/http";
// import { filteredList } from "../../utils/func";
import Card from "../card";
import styles from "./index.module.scss";

const Content = ({ data, setModalContext }) => {
  // const [cocktailList, setCocktailList] = useState([]);

  // useEffect(() => {
  //   GET(endpoint).then((data) => setCocktailList(() => data.drinks));
  // }, []);

  return (
    <div className={styles.Content}>
      {data.map((cocktail, i) => (
        <Card
          data={{ ...cocktail, positionList: i }}
          key={cocktail.idDrink}
          setModalContext={setModalContext}
        />
      ))}
    </div>
  );
};

export default Content;
