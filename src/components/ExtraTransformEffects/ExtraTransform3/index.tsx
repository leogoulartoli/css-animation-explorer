import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoInstagram,
} from "react-icons/io";
import styles from "./style.module.css";

export const ExtraTransform3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <IoLogoFacebook />
      </div>
      <div className={styles.box}>
        <IoLogoGoogle />
      </div>
      <div className={styles.box}>
        <IoLogoInstagram />
      </div>
      <div className={styles.box}>
        <IoLogoGithub />
      </div>
    </div>
  );
};
