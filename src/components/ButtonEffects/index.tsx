import { useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { HoverDegree } from "./HoverDegree";
import { HoverDuplicate } from "./HoverDuplicate";
import { HoverGlow } from "./HoverGlow";
import { HoverMove } from "./HoverMove";
import { HoverRotate } from "./HoverRotate";
import { Stretching } from "./Stretching";

export const ButtonEffects = () => {
  const [showDarkEffects, setShowDarkEffects] = useState(false);

  return showDarkEffects ? (
    <>
      <IoMdSunny
        className="w-20 h-20 cursor-pointer"
        onClick={() => setShowDarkEffects(false)}
      />
      <div className="w-full flex justify-center items-center gap-7 h-screen bg-black">
        <HoverGlow />
      </div>
    </>
  ) : (
    <>
      <IoMdMoon
        className="w-20 h-20 cursor-pointer"
        onClick={() => setShowDarkEffects(true)}
      />
      <div className="w-full h-screen flex justify-center items-center gap-7">
        <HoverDegree />
        <HoverMove />
        <HoverRotate />
        <HoverDuplicate />
        <Stretching />
      </div>
    </>
  );
};
