import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import styles from "./index.module.scss";

const Categories = ({ endpoint, setCategory }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setCategoryList(data.drinks));
  }, []);

  const onHandleClick = (e) => {
    setCategory(e.target.textContent);
  };

  return (
    <div className={styles.Categories}>
      {categoryList.map((category, i) => (
        <button onClick={onHandleClick} key={i}>
          {category.strCategory}
        </button>
      ))}
    </div>
  );
};

export default Categories;
