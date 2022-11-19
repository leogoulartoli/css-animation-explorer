import { mapCssClasses } from "../../util";
import styles from "./style.module.css";

export const TransitionTiming = () => {
  return (
    <div className="flex flex-col gap-6">
      <button
        id={styles.ease}
        className={mapCssClasses(styles.move, styles.button)}
      >
        Ease
      </button>
      <button
        id={styles.linear}
        className={mapCssClasses(styles.move, styles.button)}
      >
        Linear
      </button>
      <button
        id={styles.easeIn}
        className={mapCssClasses(styles.move, styles.button)}
      >
        Ease In
      </button>
      <button
        id={styles.easeOut}
        className={mapCssClasses(styles.move, styles.button)}
      >
        Ease Out
      </button>
      <button
        id={styles.easeInOut}
        className={mapCssClasses(styles.move, styles.button)}
      >
        Ease In Out
      </button>
    </div>
  );
};
