import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <ul>
      <li>
        <Link to={"/effects/transition-timing"}>Transition Timing</Link>
      </li>
      <li>
        <Link to={"/effects/tranforms-2D"}>2D Transforms</Link>
      </li>
    </ul>
  );
};
