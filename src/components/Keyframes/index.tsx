import React from "react";
import { Keyframe1 } from "./Keyframe1";
import { Keyframe2 } from "./Keyframe2";

export const Keyframes = () => {
  return (
    <>
      <div className="w-full flex justify-center flex-wrap items-center gap-20 px-72 py-14 z-0">
        <Keyframe1 />
        <Keyframe2 />
      </div>
    </>
  );
};
