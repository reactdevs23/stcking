import React from "react";
import { sort, setting } from "../../images/images";
import styles from "./HistoryOfStacking.module.css";
import TokenHistory from "./TokenHistory/TokenHistory";

const HistoryOfStacking = () => {
  const history = [
    {
      operation: "stake",
      amount: 214474,
      time: 1679927783475,
    },
    {
      operation: "Unstake",
      amount: 214474,
      time: 1679927783475,
    },
    {
      operation: "Purchase",
      amount: 214474,
      time: 1679927783475,
    },
    {
      operation: "stake",
      amount: 214474,
      time: 1679927783475,
    },
    {
      operation: "Unstake",
      amount: 214474,
      time: 1679927783475,
    },
    {
      operation: "Purchase",
      amount: 214474,
      time: 1679927783475,
    },
    {
      operation: "stake",
      amount: 214474,
      time: 1679927783475,
    },
    {
      operation: "Unstake",
      amount: 214474,
      time: 1679927783475,
    },
    {
      operation: "Purchase",
      amount: 214474,
      time: 1679927783475,
    },
    // {
    //   operation: "Referral - Bonus",
    //   amount: 214474,
    //   time: 1679927783475,
    // },
  ];
  return (
    <div className={styles.historyOfStackingWrapper}>
      <div className={styles.spaceBetween}>
        <p className={styles.title}>History of staking</p>
        <div className={styles.buttonContainer}>
          <div className={styles.filterAndShort}>
            {" "}
            <img src={sort} alt="#" className={styles.icon} />{" "}
            <span className={styles.text}>Filter & Sort</span>
          </div>
          <div className={styles.settings}>
            <img src={setting} alt="#" className={styles.icon} />
          </div>
        </div>
      </div>
      <TokenHistory history={history} />
    </div>
  );
};

export default HistoryOfStacking;
