import React from "react";
import styles from "./style.module.css";

export const ButtonEffects = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <button className={`${styles.button}`}>Hover</button>
    </div>
  );
};
