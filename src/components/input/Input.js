import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CounterSliceActions } from "../../store/CounterSlice";
import styles from "./Input.module.css";

const Input = () => {
  const [input, setInput] = useState("");
  const [nan, setNan] = useState(false);

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const num = parseInt(input);
    if (isNaN(num)) {
      setInput('')
      setNan(true);
      return;
    } else {
      dispatch(CounterSliceActions.input(num));
      setInput("");
      setNan(false);
    }
  };
  return (
    <div className={styles.input}>
      <div className={styles.inputContainer}>
        <form onSubmit={submitHandler}>
          <input
            onChange={inputHandler}
            value={input}
            placeholder="type in a number"
          />
          <button type="submit" className={styles.btn}>Submit</button>
        </form>
        {nan && <p className={styles.nan}>Please Enter a number.</p>}
      </div>
    </div>
  );
};

export default Input;
