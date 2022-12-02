import styles from "./style.module.css";

export const HeaderEffect6 = () => {
  return (
    <ul className={styles.container}>
      <li>
        <a href="https://www.google.com/" className={styles.linkHeader}>
          Home
        </a>
      </li>
      <li>
        <a href="https://www.google.com/" className={styles.linkHeader}>
          Products
        </a>
      </li>
      <li>
        <a href="https://www.google.com/" className={styles.linkHeader}>
          Careers
        </a>
      </li>
      <li>
        <a href="https://www.google.com/" className={styles.linkHeader}>
          About
        </a>
      </li>
    </ul>
  );
};
