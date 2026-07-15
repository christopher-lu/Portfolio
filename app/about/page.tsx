import Link from "next/link";

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
];

function techStack() {
  return (
    <ul>
      {technologies.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  );
}
export default function Page() {
  return ( <main>
            <h1>About Me</h1>

            <p>I am a fullstack software engineer</p>

            <h2>Tech Stack</h2>
                {techStack()}

            <footer>
              <Link href="/">
            Back Home
              </Link>
            </footer>
            </main>
        );
}