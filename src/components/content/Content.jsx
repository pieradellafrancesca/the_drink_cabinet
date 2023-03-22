import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import { filteredList } from "../../utils/func";
import Card from "../card";
import styles from "./index.module.scss";

const Content = ({ endpoint, category, setModalContext }) => {
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setCocktailList(() => data.drinks));
  }, []);

  return (
    <div className={styles.Content}>
      {filteredList(cocktailList, "strCategory", category).map((cocktail) => (
        <Card
          data={cocktail}
          key={cocktail.idDrink}
          setModalContext={setModalContext}
        />
      ))}
    </div>
  );
};

export default Content;
