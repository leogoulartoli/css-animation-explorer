import style from "./style.module.css";
import building from "../../../images/building.jpg";

export const HoverImageCard = () => {
  return (
    <div className={style.container}>
      <img src={building} alt="" />
      <div className={style.caption}>
        <h3>Title</h3>
        <p>Description</p>
      </div>
    </div>
  );
};
