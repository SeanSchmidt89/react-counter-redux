import React from "react";
import { useDispatch } from "react-redux";
import { CounterSliceActions } from "../../store/CounterSlice";
import styles from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(CounterSliceActions.increase());
  };

  const decreaseHandler = () => {
    dispatch(CounterSliceActions.decrease());
  };

  const increaseFiveHandler = () => {
    dispatch(CounterSliceActions.increaseFive(5));
  };

  const decreaseFiveHandler = () => {
    dispatch(CounterSliceActions.decreaseFive(-5));
  };
  return (
    <div className={styles.counter}>
      <div className={styles.btns}>
        <div className={styles.firstSection}>
          <button onClick={increaseHandler}>Increase</button>
          <button onClick={decreaseHandler}>Decrease</button>
        </div>
        <div className={styles.secondSection}>
          <button onClick={increaseFiveHandler}>+ 5</button>
          <button onClick={decreaseFiveHandler}>- 5</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
