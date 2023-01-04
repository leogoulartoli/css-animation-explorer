import React from "react";
import styles from "./style.module.css";

import maskPicture from "../../../images/mask.png";

export const CardEffect3 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <img src={maskPicture} alt="Wing" />
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
