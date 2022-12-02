import { HoverImageCard } from "./HoverImageCard";
import { HoverImageDelayedCaption } from "./HoverImageDelayedCaption";
import { HoverImageRotation } from "./HoverImageRotation";
import { HoverImageSwipe } from "./HoverImageSwipe";

export const ImageEffects = () => {
  return (
    <>
      <div className="w-full flex justify-center flex-wrap items-center gap-7 px-72 py-14 z-0">
        <HoverImageCard />
        <HoverImageRotation />
        <HoverImageDelayedCaption />
        <HoverImageSwipe />
      </div>
    </>
  );
};
