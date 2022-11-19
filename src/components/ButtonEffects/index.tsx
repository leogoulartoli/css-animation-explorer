import { HoverDegree } from "./HoverDegree";
import { HoverMove } from "./HoverMove";
import { HoverRotate } from "./HoverRotate";
import { Stretching } from "./Stretching";

export const ButtonEffects = () => {
  return (
    <div className="w-full h-full flex justify-center items-center gap-7">
      <HoverDegree />
      <HoverMove />
      <HoverRotate />
      <Stretching />
    </div>
  );
};
