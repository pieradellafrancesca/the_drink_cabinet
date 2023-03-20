import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.scss";

const Hero = ({ endpoint, setCategory }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setCategoryList(() => data.drinks));
  }, []);

  const onHandleClick = (event) => {
    setCategory(() => event.target.textContent);
    // console.log(event.target.textContent);
  };

  return (
    <div className="Hero">
      <div className="Hero__text">
        <h1>The Drink Cabinet</h1>
        <h4>Cocktails created from a lifetime of passion.</h4>
      </div>
      <img
        src="https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="hero image"
      />
      <ul className="Hero__list">
        {categoryList.map((category, index) => (
          <li onClick={onHandleClick} key={index}>
            {category.strCategory}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
