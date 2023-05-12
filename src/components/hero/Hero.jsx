import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
// import styles from "./index.module.scss";
import styled from "styled-components";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  height: 540px;
  width: 100vw;
`;

const HeroText = styled.div`
  position: absolute;
  top: 240px;
  left: 5%;
  color: white;
  z-index: 1;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 540px;
  background-color: rgba(0, 0, 0, 0.65);
  -webkit-box-shadow: inset 0px -50px 30px -10px #000000;
  -moz-box-shadow: inset 0px -50px 30px -10px #000000;
  -o-box-shadow: inset 0px -50px 30px -10px #000000;
  box-shadow: inset 0px -50px 30px -10px #000000;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 540px;
  object-fit: cover;
`;

// const HeroList = styled.ul`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   gap: 20px;
//   margin: 20px 0;
//   padding: 0;
//   list-style: none;
//   width: 90%;
//   height: 100px;

//   @media screen and (max-width: 821px) {
//     display: none;
//   }

//   & li {
//     padding: 8px 10px;
//     border-bottom: 1px solid white;
//     font-weight: bold;
//     cursor: pointer;
//     transition: all ease 0.5s;

//     &:hover {
//       background-color: #373737;
//       color: #ff1d3b;
//       border-bottom: 1px solid #ff1d3b;
//     }
//   }
// `;

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
      <HeroOverlay></HeroOverlay>
      <HeroImage src="https://images.unsplash.com/photo-1507324554506-c701c6b592a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      {/* <HeroList>
        {categoryList.map((category, index) => (
          <li onClick={onHandleClick} key={index}>
            {category.strCategory}
          </li>
        ))}
      </HeroList> */}
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
