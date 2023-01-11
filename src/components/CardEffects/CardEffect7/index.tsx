import background from "../../../images/background.jpg";
import styles from "./style.module.css";

export const CardEffect7 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imgBox}>
        <img src={background} alt="Background" />
      </div>
      <div className={styles.cardTextContent}>
        <h2 className="font-bold text-4xl">TITLE</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};
