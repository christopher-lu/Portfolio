import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps<T extends ElementType = "h2"> = {
  level?: HeadingLevel;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "children" | "className">;

const tags = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
} as const;

const styles = {
  1: "text-5xl font-extrabold tracking-tight",
  2: "text-4xl font-bold tracking-tight",
  3: "text-2xl font-bold",
  4: "text-xl font-semibold",
  5: "text-lg font-semibold",
  6: "text-base font-semibold",
} as const;

export default function Heading({
  level = 2,
  children,
  className = "",
  ...props
}: HeadingProps) {
  const Tag = tags[level];

  return (
    <Tag
      className={[styles[level], className].join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}