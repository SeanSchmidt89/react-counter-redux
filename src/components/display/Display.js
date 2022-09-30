import React from "react";
import { useSelector } from "react-redux";
import styles from "./Display.module.css";

const Display = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <div className={styles.counter}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>- Count -</p>
        </div>
        <div className={styles.count}>{counter}</div>
      </div>
    </div>
  );
};

export default Display;
