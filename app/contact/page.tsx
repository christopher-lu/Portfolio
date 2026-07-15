import Link from "next/link";

//upload images for contact info
//on hover/click display contact details

function contactInfo(info : Array) {
  return (
    <ul>
      {info.map((contact : string) => (
        <li key={contact}>{contact}</li>
      ))}
    </ul>
  );
};
const github = <Link href="https://www.github.com/christopher-lu">Github</Link>;
const email = "lu.christopher.m@gmail.com";
const linkedin = <Link href="https://www.linkedin.com/in/christopher-lu19/">LinkedIn</Link>;
const displayArr = [github, email, linkedin];

export default function Page() {
  return ( <main>
            <h1>Contact Information</h1>
            <h2>Christopher Lu </h2>

              <p>Please feel free to contact me at any of the below contact points</p>

              {contactInfo(displayArr)}

            




            <footer>
              <Link href="/">
            Back Home
              </Link>
              <Link href="/about">
            About Me
              </Link>
              <Link href="/experience">
            Expereience
              </Link>
              <Link href="/publications">
            Publications
              </Link>
            </footer>
            </main>
        );
}