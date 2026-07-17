import Card from "@/components/ui/Card";

export default function CareerHighlights() {
  const highlights = [
    "Software Engineering",
    "Healthcare Technology",
    "Cloud Architecture",
    "AI & Machine Learning",
    "Enterprise Applications",
    "Full-Stack Development",
  ];

  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold">
        Career Highlights
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item}>
            <h3 className="text-xl font-semibold">
              {item}
            </h3>
          </Card>
        ))}
      </div>
    </section>
  );
}