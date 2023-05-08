// import { useState, useEffect } from "react";
// import { GET } from "../../utils/http";
// import { filteredList } from "../../utils/func";
import Card from "../card";
import Categories from "../categories/Categories";
import styles from "./index.module.scss";

const Content = ({ data, setModalContext, setCategory }) => {
  // const [cocktailList, setCocktailList] = useState([]);

  // useEffect(() => {
  //   GET(endpoint).then((data) => setCocktailList(() => data.drinks));
  // }, []);

  return (
    <div className={styles.Content}>
      <div className={styles.bgImg}></div>
      <Categories endpoint="list.php?c=list" setCategory={setCategory} />
      <div className={styles.cardList}>
        {data.length ? (
          data.map((cocktail, i) => (
            <Card
              data={{ ...cocktail, positionList: i }}
              key={cocktail.idDrink}
              setModalContext={setModalContext}
            />
          ))
        ) : (
          <p>It seems to be nothing to see here...</p>
        )}
      </div>
    </div>
  );
};

export default Content;
