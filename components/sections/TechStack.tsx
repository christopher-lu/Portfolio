import Card from "@/components/ui/Card";
import CardContent from "@/components/ui/CardContent";
import CardHeader from "@/components/ui/CardHeader";
import CardTitle from "@/components/ui/CardTitle";

import {
  technologySections,
  Technology,
} from "@/data/technologies";

function TechnologyList({
  items,
}: {
  items: Technology[];
}) {
  return (
    <ul className="space-y-2">
      {items.map((tech) => {
        const Icon = tech.icon;

        return (
          <li
            key={tech.name}
            className="
              group
              flex
              items-center
              justify-between
              rounded-xl
              px-4
              py-3
              cursor-default
              transition-all
              duration-300
              ease-out
              hover:bg-[var(--card-hover)]
              hover:translate-x-1
            "
          >
            <span
              className="
                font-medium
                transition-colors
                duration-300
                group-hover:text-[var(--accent)]
              "
            >
              {tech.name}
            </span>

            <Icon
              size={24}
              className="
                shrink-0
                text-[var(--muted)]
                transition-all
                duration-300
                ease-out
                group-hover:text-[var(--accent)]
                group-hover:scale-110
                group-hover:rotate-[8deg]
              "
            />
          </li>
        );
      })}
    </ul>
  );
}



export default function TechStack() {
  return (
    <section className="mt-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Tech Stack
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {technologySections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
                <CardTitle>
                    {section.title}
                </CardTitle>
            </CardHeader>

            <CardContent>
                <TechnologyList
                    items={section.items}
                />
            </CardContent>
        </Card>
        ))}
      </div>
    </section>
  );
}