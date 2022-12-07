import React from "react";
import styles from "./style.module.css";

export const CardEffect1 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className="font-bold text-xl">Design</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
        <a className="cursor-pointer" href="#">
          Read more
        </a>
      </div>
    </div>
  );
};
