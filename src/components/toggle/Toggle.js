import React from "react";
import styles from "./Toggle.module.css";
import { useDispatch } from "react-redux";
import { CounterSliceActions } from "../../store/CounterSlice";

const Toggle = () => {
  const dispatch = useDispatch();
  const zeroHandler = () => {
    dispatch(CounterSliceActions.zero());
  };
  return (
    <div className={styles.toggle}>
      <button>Close</button>
      <button onClick={zeroHandler}>Zero</button>
    </div>
  );
};

export default Toggle;
