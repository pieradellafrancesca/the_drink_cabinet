import { useState } from "react";
import styles from "./index.module.scss";

const Reservation = ({
  setReservetionVisibility,
  setPopupVisibility,
  setReservationInfo,
}) => {
  const [yourName, setYourName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const onHandleTextInput = (event) => {
    setYourName(event.target.value);
    setReservationInfo((prev) => ({ ...prev, name: event.target.value }));
  };

  const onHandleDateInput = (event) => {
    setDate(event.target.value);
    setReservationInfo((prev) => ({ ...prev, date: event.target.value }));
  };

  const onHandleTimeInput = (event) => {
    setTime(event.target.value);
    setReservationInfo((prev) => ({ ...prev, time: event.target.value }));
  };

  const onHandleModalClose = () => {
    setReservetionVisibility(false);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    setReservetionVisibility(false);
    setPopupVisibility(true);

    setTimeout(() => {
      setPopupVisibility(false);
    }, 4000);
  };

  return (
    <div className={styles.Reservation}>
      <div className={styles.overlay} onClick={onHandleModalClose}></div>
      <div className={styles.text}>
        <h3>Reserve your seat</h3>
        <form onSubmit={onHandleSubmit}>
          <label htmlFor="yourName">Your name:</label>
          <input
            id="yourName"
            type="text"
            value={yourName}
            onChange={onHandleTextInput}
            required
          />
          <label htmlFor="date">Choose the date:</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={onHandleDateInput}
            required
          />
          <label htmlFor="time">Choose the time:</label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={onHandleTimeInput}
            required
          />
          <input className={styles.submit} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Reservation;
