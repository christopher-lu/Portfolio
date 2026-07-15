import Link from "next/link";

// const technologies = [
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Tailwind CSS",
// ];
const languages = [
  "JavaScript",
  "TypeScript"

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
]

function techStack(stack : Array) {
  return (
    <ul>
      {stack.map((tech : string) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  );
}
export default function Page() {
  return ( <main>
            <h1>Christopher Lu</h1>
            <h2>About Me</h2>

              <p>I am a fullstack software engineer based in NYC.</p>

            <h2>Tech Stack</h2>

              <h3>Languages</h3>
                <h3></h3>
                  {techStack(languages)}

              <h3>Frontend</h3>
                <h3></h3>
                  {techStack(frontend)}

              <h3>Backend</h3>
                <h3></h3>
                  {techStack(backend)}

              <h3>DevOps</h3>
                <h3></h3>
                  {techStack(devops)}




            <footer>
              <Link href="/">
            Back Home
              </Link>
              <Link href="/experience">
            Experience
              </Link>
              <Link href="/publications">
            Publications
              </Link>
            </footer>
              <Link href="/contact">
              Contact Information
              </Link>
            </main>
        );
}