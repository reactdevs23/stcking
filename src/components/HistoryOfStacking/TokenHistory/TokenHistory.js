import React from "react";
import { lock, unlock } from "../../../images/images";
import styles from "./TokenHistory.module.css";

const TokenHistory = ({ history }) => {
  const formatedDate = (time) => {
    const dateObj = new Date(time);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

    return `${day}-${month}-${year}`;
  };
  return (
    <div className={styles.historyContainer}>
      <div className={styles.historyWrapper}>
        <p></p>
        <div className={styles.header}>
          <p className={styles.title}>Operation</p>{" "}
          <p className={[styles.title, styles.time].join(" ")}>Time</p>{" "}
          <p className={styles.title}>Amount</p>
        </div>
      </div>
      <div className={[styles.allHistories, styles.grScrollbar].join(" ")}>
        {history.map((el, i) => (
          <div
            className={[
              styles.historyWrapper,
              styles.histories,
              el.operation.toLowerCase() === "unstake" &&
                styles.unstakeHistories,
            ].join(" ")}
            key={i}
          >
            <div
              className={[
                styles.lockBox,
                el.operation.toLowerCase() === "unstake" &&
                  styles.unstakeLockBox,
              ].join(" ")}
            >
              <img
                src={el.operation.toLowerCase() === "unstake" ? unlock : lock}
                alt="#"
                className={styles.lockIcon}
              />
            </div>
            <div className={styles.history}>
              <p className={styles.text}>{el.operation}</p>{" "}
              <p className={[styles.text, styles.time].join(" ")}>
                {formatedDate(el.time)}
              </p>{" "}
              <p className={styles.text}>{el.amount.toLocaleString()} UNS</p>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenHistory;
