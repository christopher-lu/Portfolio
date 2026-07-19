"use client";

import type { LucideIcon } from "lucide-react";

import Card from "@/components/ui/Card";

interface ContactCardProps {
  title: string;
  description: string;
  buttonLabel: string;
  icon: LucideIcon;
}

export default function ContactCard({
  title,
  description,
  buttonLabel,
  icon: Icon,
}: ContactCardProps) {
  return (
    <Card className="group flex h-full flex-col justify-between transition-shadow duration-200 hover:shadow-lg">
      <div>
        <div className="mb-6 flex items-center gap-4">
          <div className="rounded-xl bg-[var(--secondary)] p-3 text-[var(--primary)]">
            <Icon className="h-6 w-6" />
          </div>

          <h3 className="text-2xl font-semibold">
            {title}
          </h3>
        </div>

        <p className="leading-7 text-[var(--muted-foreground)]">
          {description}
        </p>
      </div>

      <div className="mt-8">
        <span className="
            inline-flex
            rounded-lg
            bg-[var(--accent)]
            px-4
            py-2
            text-sm
            font-medium
            text-white
            transition-colors
            duration-200
            group-hover:brightness-110
            ">
          {buttonLabel}
        </span>
      </div>
    </Card>
  );
}