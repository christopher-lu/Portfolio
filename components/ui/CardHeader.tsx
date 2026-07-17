import { ReactNode } from "react";

type CardHeaderProps = {
  children: ReactNode;
};

export default function CardHeader({
  children,
}: CardHeaderProps) {
  return (
    <div
      className="
        mb-6
        border-b
        border-[var(--border)]
        pb-3
      "
    >
      {children}
    </div>
  );
}