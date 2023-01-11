import { CardEffect1 } from "./CardEffect1";
import { CardEffect2 } from "./CardEffect2";
import { CardEffect3 } from "./CardEffect3";
import { CardEffect4 } from "./CardEffect4";
import { CardEffect5 } from "./CardEffect5";
import { CardEffect6 } from "./CardEffect6";
import { CardEffect7 } from "./CardEffect7";

export const CardEffects = () => {
  return (
    <>
      <div className="w-full flex justify-center flex-wrap items-center gap-20 px-72 py-14 z-0">
        <CardEffect1 />
        <CardEffect2 />
        <CardEffect3 />
        <CardEffect4 />
        <CardEffect5 />
        <CardEffect6 />
        <CardEffect7 />
      </div>
    </>
  );
};
