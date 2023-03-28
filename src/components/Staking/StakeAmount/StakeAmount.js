import React, { useState } from "react";
import { uns } from "../../../images/images";
import styles from "./StakeAmount.module.css";

const StakeAmount = ({ avialableUbs = 214474, rate }) => {
  const [amount, setAmount] = useState(81474.612);
  return (
    <div>
      <div className={styles.stakeAmountContainer}>
        <div className={styles.spaceBetween}>
          <p className={styles.title}>Stake Amount</p>
          <p className={styles.text}>Please enter amount</p>
        </div>{" "}
        <div className={styles.valueWrapper}>
          <div className={styles.form}>
            <p className={styles.currency}>UBS</p>
            <input
              type="text"
              className={styles.input}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <p className={[styles.ubs, styles.subText].join(" ")}>MAX</p>
          </div>
          <div className={styles.unsContainer}>
            <img src={uns} alt="#" className={styles.image} />
            <span className={[styles.uns, styles.subText].join(" ")}>uns</span>
          </div>
        </div>
        <div
          className={[styles.spaceBetween, styles.availableContainer].join(" ")}
        >
          <p className={styles.title}>
            Available:{" "}
            <span className={styles.value}>
              {avialableUbs.toLocaleString()} UBS
            </span>{" "}
          </p>
          <p className={styles.text}>
            ≈ {(avialableUbs / 5045.25).toFixed(2)} USDT
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default StakeAmount;
