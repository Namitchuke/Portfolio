import { twMerge } from "tailwind-merge";
import { myInfo } from "../../assets/data";
import { AnimatedBox } from "./AnimatedBox";

export const AnimatedImageBox = ({ className }: { className?: string }) => {
  return (
    <AnimatedBox
      className={twMerge(
        "col-span-4 row-span-4 p-0 overflow-hidden",
        className
      )}
    >
      <img
        src={myInfo.image}
        alt={`Photo of ${myInfo.name}`}
        className="w-full h-full object-cover object-top"
      />
    </AnimatedBox>
  );
};
