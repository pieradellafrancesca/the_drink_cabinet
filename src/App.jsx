import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import { filteredList } from "./utils/func";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Content from "./components/content";
import Reservation from "./components/reservation/Reservation";
import ModalItem from "./components/modalItem/ModalItem";
import Popup from "./components/popup/Popup";
import Footer from "./components/footer/Footer";
import "./App.scss";

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Ordinary Drink");
  const [modalContext, setModalContext] = useState({
    isVisible: false,
    payload: {},
    positionList: null,
  });
  const [reservetionVisibility, setReservetionVisibility] = useState(false);
  const [popupVisibility, setPopupVisibility] = useState(false);
  const [reservationInfo, setReservationInfo] = useState({
    name: null,
    date: null,
    time: null,
  });

  useEffect(() => {
    GET("search.php?f=g").then((data) => setCocktailList(() => data.drinks));
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
          {popupVisibility && (
            <Popup>
              <h3>Notification</h3>
              <p>
                Hi <strong>{reservationInfo.name}</strong>! Your reservation is
                confirmed!
              </p>
              <p>
                See you on <strong>{reservationInfo.date}</strong> at{" "}
                <strong>{reservationInfo.time}</strong>.
              </p>
            </Popup>
          )}
          <Navbar setReservetionVisibility={setReservetionVisibility} />
          <Hero endpoint="list.php?c=list" setCategory={setCategory} />
          <Content
            data={filteredList(cocktailList, "strCategory", category)}
            setModalContext={setModalContext}
          />
          <Footer />
          {reservetionVisibility && (
            <Reservation
              setReservetionVisibility={setReservetionVisibility}
              setPopupVisibility={setPopupVisibility}
              setReservationInfo={setReservationInfo}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
