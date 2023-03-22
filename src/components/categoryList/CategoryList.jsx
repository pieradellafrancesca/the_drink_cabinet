import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import styles from "./index.module.scss";

const CategoryList = ({ endpoint, setCategory }) => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    GET(endpoint).then((data) => setCategoryList(() => data.drinks));
  }, []);

  const onHandleClick = (event) => {
    setCategory(() => event.target.textContent);
    // console.log(event.target.textContent);
  };
  return (
    <ul className={styles.CategoryList}>
      {categoryList.map((category, index) => (
        <li onClick={onHandleClick} key={index}>
          {category.strCategory}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
