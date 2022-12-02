import styles from "./style.module.css";

export const HeaderEffect2 = () => {
  return (
    <ul className={styles.container}>
      <li>
        <a className={styles.linkHeader}>Home</a>
      </li>
      <li>
        <a className={styles.linkHeader}>Products</a>
      </li>
      <li>
        <a className={styles.linkHeader}>Careers</a>
      </li>
      <li>
        <a className={styles.linkHeader}>About</a>
      </li>
    </ul>
  );
};
