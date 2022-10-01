import React from "react";
import styles from "./Toggle.module.css";
import { useDispatch } from "react-redux";
import { CounterSliceActions } from "../../store/CounterSlice";
import { useSelector } from "react-redux";

const Toggle = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.showCounter);
  const zeroHandler = () => {
    dispatch(CounterSliceActions.zero());
  };

  const toggleHandler = () => {
    dispatch(CounterSliceActions.toggle());
  };
  return (
    <div className={styles.toggle}>
      {toggle ? (
        <button onClick={toggleHandler}>Close</button>
      ) : (
        <button onClick={toggleHandler}>Open</button>
      )}
      {toggle && <button onClick={zeroHandler}>Zero</button>}
    </div>
  );
};

export default Toggle;
