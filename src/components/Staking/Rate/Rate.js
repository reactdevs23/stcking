import React from "react";
import styles from "./rate.module.css";

const Rate = ({ rate }) => {
  return (
    <div className={styles.rateContainer}>
      <div className={styles.spaceBetween}>
        <p className={styles.rate}>Rate</p>
        <p className={styles.rate}>1 UBS ≈ 2.57 USDT</p>
      </div>
      {rate.map((el, i) => (
        <div
          className={[styles.spaceBetween, styles.rateWrapper].join(" ")}
          key={i}
        >
          <p className={styles.rateText}>{el.key}</p>{" "}
          <p className={styles.rateText}>{el.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Rate;
