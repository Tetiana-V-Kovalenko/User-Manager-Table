import { FC } from "react";

type IconProps = {
  src: string;
  className?: string;
};

export const Icon: FC<IconProps> = ({ src, className }) => {
  return <img src={src} alt="icon" className={className} />;
};
