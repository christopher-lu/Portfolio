import Link from "next/link";

import Card from "@/components/ui/Card";

import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

type Props = {
  icon: LucideIcon | IconType;
  label: string;
  value: string;
  href?: string;
};

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: Props) {
  const card = (
    <Card className="group flex h-full flex-col items-center justify-center rounded-3xl p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 rounded-full bg-[var(--surface)] p-5 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-8 w-8 text-[var(--accent)]" />
      </div>

      <h3 className="text-xl font-semibold">
        {label}
      </h3>

      <p className="mt-2 break-all text-[var(--muted)]">
        {value}
      </p>
    </Card>
  );

  if (!href) return card;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {card}
    </Link>
  );
}