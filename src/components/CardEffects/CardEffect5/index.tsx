import { IoMdCube } from "react-icons/io";
import styles from "./style.module.css";

export const CardEffect5 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.face}>
        <IoMdCube className={styles.icon} />
        <h2 className="font-bold text-xl">Design</h2>
      </div>
      <div className={styles.cardTextContent}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
      </div>
    </div>
  );
};
