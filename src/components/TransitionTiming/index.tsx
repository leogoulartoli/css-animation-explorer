import styles from "./style.module.css";

export const TransitionTiming = () => {
  return (
    <div id={styles.container}>
      <button id={styles.ease} className={styles.move}>
        Ease
      </button>
      <button id={styles.linear} className={styles.move}>
        Linear
      </button>
      <button id={styles["ease-in"]} className={styles.move}>
        Ease In
      </button>
      <button id={styles["ease-out"]} className={styles.move}>
        Ease Out
      </button>
      <button id={styles["ease-in-out"]} className={styles.move}>
        Ease In Out
      </button>
    </div>
  );
};
