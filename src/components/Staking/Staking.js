import React, { useState } from "react";
import { activeUnlock, activeLock, lock, unlock } from "../../images/images";
import Duration from "./Duration/Duration";
import Rate from "./Rate/Rate";
import StakeAmount from "./StakeAmount/StakeAmount";
import styles from "./style.module.css";

const Staking = () => {
  const [stake, setStake] = useState(true);
  const duration = [
    {
      day: 30,
      apy: 42,
    },
    {
      day: 60,
      apy: 62,
    },
    {
      day: 90,
      apy: 72,
    },
    {
      day: 120,
      apy: 79,
    },
  ];
  const rate = [
    {
      key: "Slippage tolerance",
      value: "4.02%",
    },
    {
      key: "Minimum:",
      value: "4.02%",
    },
    {
      key: "Available quote:",
      value: "1 BUS",
    },
    {
      key: "Total personal quote:",
      value: "1,000 BUS",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.stakeWrapper}>
        <div className={styles.stakeUnstake}>
          <div
            className={[styles.stake, stake && styles.activeLock].join(" ")}
            onClick={() => setStake(true)}
          >
            <div className={styles.lockBox}>
              <img
                src={stake ? activeLock : lock}
                alt="#"
                className={styles.lockIcon}
              />
            </div>
            <p className={styles.heading}>Stake</p>
          </div>
          <div
            className={[styles.unStake, !stake && styles.activeLock].join(" ")}
            onClick={() => setStake(false)}
          >
            <div className={styles.lockBox}>
              <img
                src={!stake ? activeUnlock : unlock}
                alt="#"
                className={styles.lockIcon}
              />
            </div>
            <p className={styles.heading}>Unstack</p>
          </div>
        </div>
        <Duration duration={duration} />
        <StakeAmount />
        <Rate rate={rate} />
        <button className={styles.button}>Stake</button>
      </div>
    </div>
  );
};

export default Staking;
