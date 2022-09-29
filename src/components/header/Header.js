import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Sean's Counter</h1>
      <p>Built with Redux Toolit</p>
    </div>
  );
};

export default Header;
