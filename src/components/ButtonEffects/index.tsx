import { useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { HoverOpacity } from "./HoverOpacity";
import { HoverDegree } from "./HoverDegree";
import { HoverDuplicate } from "./HoverDuplicate";
import { HoverGlow } from "./HoverGlow";
import { HoverMove } from "./HoverMove";
import { HoverContainers } from "./HoverContainers";
import { Stretching } from "./Stretching";
import { HoverCircular } from "./HoverCircular";
import { HoverCalendar } from "./HoverCalendar";
import { HoverSwitch } from "./HoverSwitch";
import { HoverDot } from "./HoverDot";
import { HoverOpen } from "./HoverOpen";
import { HoverPuzzle } from "./HoverPuzzle";
import { HoverLines } from "./HoverLines";
import { HoverBorderExpansion } from "./HoverBorderExpansion";
import { HoverBigger } from "./HoverBigger";
import { HoverFullBorder } from "./HoverFullBorder";
import { HoverWave } from "./HoverWave";
import { HoverCut } from "./HoverCut";

export const ButtonEffects = () => {
  const [showDarkEffects, setShowDarkEffects] = useState(false);

  return showDarkEffects ? (
    <>
      <IoMdSunny
        className="w-20 h-20 cursor-pointer"
        onClick={() => setShowDarkEffects(false)}
      />
      <div className="w-full flex justify-center flex-wrap items-center gap-7 px-72 py-14 z-0 bg-[#2f2f2f]">
        <HoverGlow />
        <HoverCalendar />
        <HoverPuzzle />
        <HoverLines />
        <HoverFullBorder />
        <HoverBorderExpansion />
        <HoverWave />
      </div>
    </>
  ) : (
    <>
      <IoMdMoon
        className="w-20 h-20 cursor-pointer"
        onClick={() => setShowDarkEffects(true)}
      />
      <div className="w-full flex justify-center flex-wrap items-center gap-7 py-14 px-72">
        <HoverDegree />
        <HoverMove />
        <HoverCut />
        <HoverContainers />
        <HoverDuplicate />
        <Stretching />
        <HoverOpacity />
        <HoverOpen />
        <HoverCircular />
        <HoverSwitch />
        <HoverDot />
        <HoverBigger />
      </div>
    </>
  );
};
