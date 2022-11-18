import { Link, Outlet } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import styles from "./style.module.css";

export const Template = () => {
  return (
    <div>
      <Link to={"/"}>
        <IoIosArrowBack className={styles.link} />
      </Link>
      <Outlet />
    </div>
  );
};
