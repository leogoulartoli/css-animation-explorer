import React from "react";
import { Keyframe1 } from "./Keyframe1";
import { Keyframe2 } from "./Keyframe2";
import { Keyframe3 } from "./Keyframe3";
import { Keyframe4 } from "./Keyframe4";
import { Keyframe5 } from "./Keyframe5";
import { Keyframe6 } from "./Keyframe6";
import { Keyframe7 } from "./Keyframe7";

export const Keyframes = () => {
  return (
    <>
      <div className="w-full flex justify-center flex-wrap items-center gap-20 px-72 py-14 z-0">
        <Keyframe1 />
        <Keyframe2 />
        <Keyframe3 />
        <Keyframe4 />
        <Keyframe5 />
        <Keyframe6 />
        <Keyframe7 />
      </div>
    </>
  );
};
