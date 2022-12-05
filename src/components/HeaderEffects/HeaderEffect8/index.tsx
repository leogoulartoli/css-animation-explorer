import styles from "./style.module.css";

export const HeaderEffect8 = () => {
  return (
    <ul className={styles.container}>
      <li>
        <a
          href="https://www.google.com/"
          data-title="Home"
          className={styles.linkHeader}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="https://www.google.com/"
          data-title="Products"
          className={styles.linkHeader}
        >
          Products
        </a>
      </li>
      <li>
        <a
          href="https://www.google.com/"
          data-title="Careers"
          className={styles.linkHeader}
        >
          Careers
        </a>
      </li>
      <li>
        <a
          href="https://www.google.com/"
          data-title="About"
          className={styles.linkHeader}
        >
          About
        </a>
      </li>
    </ul>
  );
};
