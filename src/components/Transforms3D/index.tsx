import React from "react";
import styles from "./style.module.css";

export const Transforms3D = () => {
  return (
    <div id={styles.container}>
      <button className={`${styles.move} ${styles.button}`}>Translate</button>
      <button className={`${styles.rotate} ${styles.button}`}>Rotate</button>
    </div>
  );
};
