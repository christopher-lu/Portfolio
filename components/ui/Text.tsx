import { ReactNode } from "react";

type TextVariant =
  | "body"
  | "muted"
  | "lead"
  | "small";

type TextProps = {
  children: ReactNode;
  variant?: TextVariant;
  className?: string;
};

const styles: Record<TextVariant, string> = {
  body: "text-base",

  muted: "text-base text-[var(--muted)]",

  lead: "text-lg text-[var(--muted)]",

  small: "text-sm text-[var(--muted)]",
};

export default function Text({
  children,
  variant = "body",
  className = "",
}: TextProps) {
  return (
    <p
      className={[
        styles[variant],
        className,
      ].join(" ")}
    >
      {children}
    </p>
  );
}