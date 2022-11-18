import React from "react";
import styles from "./style.module.css";

export const Transforms2D = () => {
  return (
    <div id={styles.container}>
      <button className={styles.move}>Translate</button>
      <button className={styles.scale}>Scale</button>
      <button className={styles.rotate}>Rotate</button>
      <button className={styles.rotateOrigin}>Rotate Origin</button>
      <button className={styles.skew}>Skew</button>;
    </div>
  );
};
