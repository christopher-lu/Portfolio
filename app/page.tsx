import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function Page() {
  return (
    <Container>
      <Section className="text-center">
        <h1 className="text-5xl font-bold md:text-7xl">
          Christopher Lu
        </h1>

        <p className="mt-6 text-lg text-[var(--muted)]">
          Full Stack Software Engineer
        </p>

        <div className="mt-10 flex justify-center">
          <Button href="/about">
            Learn More
          </Button>
        </div>

        <div className="mt-16">
          <Card>
            <h2 className="text-2xl font-semibold">
              Design System Test
            </h2>

            <p className="mt-4 text-[var(--muted)]">
              This card is using the reusable Card component.
            </p>
          </Card>
        </div>
      </Section>
    </Container>
  );
}