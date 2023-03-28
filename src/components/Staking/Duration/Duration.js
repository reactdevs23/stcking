import React, { useState } from "react";
import styles from "./Duration.module.css";

const Duration = ({ duration }) => {
  const [active, setActive] = useState(1);
  return (
    <div className={styles.durationContainer}>
      <div className={styles.spaceBetween}>
        <p className={styles.title}>Duration</p>
        <p className={styles.text}>Please select a time frame</p>
      </div>
      <div className={styles.durations}>
        {duration.map((el, i) => (
          <div
            className={[
              styles.dayBox,
              active === i && styles.activeDayBox,
            ].join(" ")}
            key={i}
            onClick={() => setActive(i)}
          >
            <p className={styles.day}>
              {el.day} <span className={styles.dayText}>Day</span>
            </p>
            <div className={styles.apyBox}>
              <span>{el.apy}% </span>
              <span className={styles.apyText}>APY</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Duration;
