import sprite from "../assets/svg/sprite.svg";
type IconProps = {
  id: "enlarge" | "shrink" | "circle-up";
  className?: string;
};
export const Icon = ({ id, className }: IconProps) => {
  return (
    // <div className={className}>
    <svg className={className}>
      <use href={`${sprite}#${id}`} />
    </svg>
    // </div>
  );
};
