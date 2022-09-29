import React from "react";
import { useSelector } from "react-redux";
import styles from "./Display.module.css";

const Display = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <div className={styles.counter}>
      
      {counter}
    </div>
  );
};

export default Display;
