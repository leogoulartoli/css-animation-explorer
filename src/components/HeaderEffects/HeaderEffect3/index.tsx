import styles from "./style.module.css";

export const HeaderEffect3 = () => {
  return (
    <ul className={styles.container}>
      <li>
        <a href="https://www.google.com/" className={styles.linkHeader}>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="https://www.google.com/" className={styles.linkHeader}>
          <span>Products</span>
        </a>
      </li>
      <li>
        <a href="https://www.google.com/" className={styles.linkHeader}>
          <span>Careers</span>
        </a>
      </li>
      <li>
        <a href="https://www.google.com/" className={styles.linkHeader}>
          <span>About</span>
        </a>
      </li>
    </ul>
  );
};
