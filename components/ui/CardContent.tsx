import { ReactNode } from "react";

type CardContentProps = {
  children: ReactNode;
};

export default function CardContent({
  children,
}: CardContentProps) {
  return (
    <div>
      {children}
    </div>
  );
}