import { ExtraTransform1 } from "./ExtraTransform1";
import { ExtraTransform2 } from "./ExtraTransform2";
import { ExtraTransform3 } from "./ExtraTransform3";
import { ExtraTransform4 } from "./ExtraTransform4";

export const ExtraTransformEffects = () => {
  return (
    <>
      <div className="w-full flex-col justify-center flex-wrap items-center gap-25 mx-72 my-14">
        <ExtraTransform1 />
        <ExtraTransform2 />
        <ExtraTransform3 />
        <ExtraTransform4 />
      </div>
    </>
  );
};
