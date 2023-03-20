import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Content from "./components/content";
import "./App.scss";

function App() {
  const [category, setCategory] = useState("Ordinary Drink");

  return (
    <div className="App">
      <Navbar />
      <Hero endpoint="list.php?c=list" setCategory={setCategory} />
      <Content endpoint="search.php?f=m" category={category} />
    </div>
  );
}

export default App;
