import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
// import styles from "./index.module.scss";
import styled from "styled-components";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
  height: 540px;
  width: 100%;
`;

const HeroText = styled.div`
  position: absolute;
  top: 240px;
  left: 5%;
  color: white;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 540px;
  object-fit: cover;
`;

const HeroList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 20px 0;
  padding: 0;
  list-style: none;

  @media screen and (max-width: 821px) {
    display: none;
  }

  & li {
    padding: 8px 10px;
    border-bottom: 1px solid #373737;
    font-weight: bold;
    cursor: pointer;
    transition: all ease 0.5s;

    &:hover {
      background-color: #373737;
      color: white;
    }
  }
`;

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
    <HeroWrapper>
      <HeroText>
        <h1>The Drink Cabinet</h1>
        <h4>Cocktails created from a lifetime of passion.</h4>
      </HeroText>
      <HeroImage src="https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <HeroList>
        {categoryList.map((category, index) => (
          <li onClick={onHandleClick} key={index}>
            {category.strCategory}
          </li>
        ))}
      </HeroList>
    </HeroWrapper>
  );

  // return (
  //   <div className={styles.Hero}>
  //     <div className={styles.text}>
  //       <h1>The Drink Cabinet</h1>
  //       <h4>Cocktails created from a lifetime of passion.</h4>
  //     </div>
  //     <img src="https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  //     <ul className={styles.CategoryList}>
  //       {categoryList.map((category, index) => (
  //         <li onClick={onHandleClick} key={index}>
  //           {category.strCategory}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default Hero;
