import React from "react";
import HistoryOfStacking from "../../components/HistoryOfStacking/HistoryOfStacking";
import Staking from "../../components/Staking/Staking";
import styles from "./mystyles.module.css";

const Home = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className="container">
        {" "}
        <div className={styles.wrapper}>
          <HistoryOfStacking />
          <Staking />
        </div>
      </div>
    </div>
  );
};

export default Home;
