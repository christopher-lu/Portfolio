import Link from "next/link";

export default function Page() {
  return (
        <main>
          <h1 className="text-3xl font-bold underline">Hello There!</h1>

          <ul>
            <li><Link href="/about">
                  About Me
                </Link>
            </li>
            <li><Link href="/experience">
                  Experience
                </Link>
            </li>
            <li><Link href="/publications">
                  Publications
                </Link>
            </li>
            <li><Link href="/contact">
                  Contact Me
                </Link>
            </li>
          </ul>
        </main>
        );
}