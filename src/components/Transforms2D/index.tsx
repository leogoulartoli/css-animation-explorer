import React from "react";
import styles from "./style.module.css";

export const Transforms2D = () => {
  return (
    <div className="flex flex-col items-center w-full gap-20">
      <button
        className={`${styles.button} hover:translate-x-96 hover:translate-y-40`}
      >
        Translate
      </button>
      <button className={`${styles.button} hover:scale-150`}>Scale</button>
      <button className={`${styles.button} hover:rotate-180`}>Rotate</button>
      <button className={`${styles.button} hover:rotate-180 hover:origin-top`}>
        Rotate Origin
      </button>
      <button className={`${styles.button} hover:skew-x-12 hover:skew-y-12`}>
        Skew
      </button>
    </div>
  );
};
