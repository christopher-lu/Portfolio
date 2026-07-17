import { ReactNode } from "react";

type CardTitleProps = {
  children: ReactNode;
};

export default function CardTitle({
  children,
}: CardTitleProps) {
  return (
    <h3
      className="
        text-2xl
        font-bold
        tracking-tight
      "
    >
      {children}
    </h3>
  );
}