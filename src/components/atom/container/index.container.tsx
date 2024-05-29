import { FC } from "react";

interface ContainerProps {
  size?: "normal" | "small";
  tag?: "div" | "section";
  children?: React.ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({
  size = "normal",
  tag = "section",
  children,
  className,
}) => {
  const Tag = tag === "section" ? "section" : "div";
  const maxWidth = size === "small" ? "max-w-5xl" : "max-w-7xl";
  return <Tag className={`mx-auto  ${maxWidth} ${className}`}>{children}</Tag>;
};

export default Container;
