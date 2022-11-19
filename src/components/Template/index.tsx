import { Link, Outlet } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export const Template = () => {
  return (
    <>
      <div className="w-full bg-slate-400 mb-4 h-12">
        <Link to={"/"}>
          <IoIosArrowBack className={"w-14 h-14"} />
        </Link>
      </div>
      <Outlet />
    </>
  );
};
