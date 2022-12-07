import { CardEffect1 } from "./CardEffect1";
import { CardEffect2 } from "./CardEffect2";

export const CardEffects = () => {
  return (
    <>
      <div className="w-full flex justify-center flex-wrap items-center gap-7 px-72 py-14 z-0">
        <CardEffect1 />
        <CardEffect2 />
      </div>
    </>
  );
};
