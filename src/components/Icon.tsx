import { FC } from "react";
import sprite from "../assets/svg/sprite.svg";

type IconProps = {
  id: "enlarge" | "shrink" | "circle-up" | "reset";
  className?: string;
};

export const Icon: FC<IconProps> = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};
