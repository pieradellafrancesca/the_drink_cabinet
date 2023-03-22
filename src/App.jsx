import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Content from "./components/content";
import "./App.scss";
import ModalItem from "./components/modalItem/ModalItem";

function App() {
  const [category, setCategory] = useState("Ordinary Drink");
  const [modalContext, setModalContext] = useState({
    isVisible: false,
    payload: {},
  });

  return (
    <div className="App">
      {modalContext.isVisible ? (
        <ModalItem
          data={modalContext.payload}
          setModalContext={setModalContext}
        />
      ) : (
        <>
          <Navbar endpoint="list.php?c=list" setCategory={setCategory} />
          <Hero endpoint="list.php?c=list" setCategory={setCategory} />
          <Content
            endpoint="search.php?f=p"
            category={category}
            setModalContext={setModalContext}
          />
        </>
      )}
    </div>
  );
}

export default App;
