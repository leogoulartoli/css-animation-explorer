import React from "react";
import styles from "./style.module.css";

import windPicture from "../../../images/wing.jpg";

export const CardEffect2 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <img src={windPicture} alt="Wing" />
        <div className={styles.cardTextContent}>
          <h2 className="font-bold text-xl">Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
        </div>
      </div>
    </div>
  );
};
