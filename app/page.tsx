import Link from "next/link";

export default function Page() {
  return (
        <main>
          <h1>Hello, Next.js!</h1>

          <ul>
            <li><Link href="/about">
                  About Me
                </Link>
            </li>
            <li><Link href="/publications">
                  Publications
                </Link>
            </li>
          </ul>
        </main>
        );
}