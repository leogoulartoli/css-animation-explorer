import boyPicture from "../../../images/boy.jpg";
import styles from "./style.module.css";

export const CardEffect6 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgBox}>
          <img src={boyPicture} alt="Boy" />
        </div>
        <div className={styles.cardTextContent}>
          <h2 className="font-bold text-xl">John</h2>
          <p>Engineer</p>
        </div>
      </div>
    </div>
  );
};
