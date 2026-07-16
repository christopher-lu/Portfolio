import Link from "next/link";

const languages = [
  "JavaScript",
  "TypeScript",
];

const frontend = [
  "React.js",
  "Next.js",
  "Redux",
  "Tailwind CSS",
  "SASS",
];

const backend = [
  "Node.js",
  "Express.js",
  "NoSQL - MongoDB",
  "SQL - PostgreSQL",
  "GraphQL",
];

const devops = [
  "Docker",
  "Kubernetes",
  "Grafana",
  "Prometheus",
];

function TechStack({ stack }: { stack: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {stack.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col px-6 py-10">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Christopher Lu
        </h1>

        <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
          About Me
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-700">
          I am a full-stack software engineer based in New York City.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold border-b pb-2">
              Languages
            </h3>
            <TechStack stack={languages} />
          </div>

          <div>
            <h3 className="text-xl font-semibold border-b pb-2">
              Frontend
            </h3>
            <TechStack stack={frontend} />
          </div>

          <div>
            <h3 className="text-xl font-semibold border-b pb-2">
              Backend
            </h3>
            <TechStack stack={backend} />
          </div>

          <div>
            <h3 className="text-xl font-semibold border-b pb-2">
              DevOps
            </h3>
            <TechStack stack={devops} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-12">
        <nav className="flex flex-wrap justify-center gap-6 text-blue-600">
          <Link
            href="/"
            className="underline hover:text-blue-800 transition-colors"
          >
            Back Home
          </Link>

          <Link
            href="/experience"
            className="underline hover:text-blue-800 transition-colors"
          >
            Experience
          </Link>

          <Link
            href="/publications"
            className="underline hover:text-blue-800 transition-colors"
          >
            Publications
          </Link>

          <Link
            href="/contact"
            className="underline hover:text-blue-800 transition-colors"
          >
            Contact Information
          </Link>
        </nav>
      </footer>
    </main>
  );
}