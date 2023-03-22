import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import { filteredList } from "./utils/func";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Content from "./components/content";

import ModalItem from "./components/modalItem/ModalItem";
import "./App.scss";

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Ordinary Drink");
  const [modalContext, setModalContext] = useState({
    isVisible: false,
    payload: {},
    positionList: null,
  });

  useEffect(() => {
    GET("search.php?f=W").then((data) => setCocktailList(() => data.drinks));
  }, []);

  return (
    <div className="App">
      {modalContext.isVisible ? (
        <ModalItem
          data={modalContext}
          setModalContext={setModalContext}
          filteredList={filteredList(cocktailList, "strCategory", category)}
        />
      ) : (
        <>
          <Navbar endpoint="list.php?c=list" setCategory={setCategory} />
          <Hero endpoint="list.php?c=list" setCategory={setCategory} />
          <Content
            data={filteredList(cocktailList, "strCategory", category)}
            setModalContext={setModalContext}
          />
        </>
      )}
    </div>
  );
}

export default App;
