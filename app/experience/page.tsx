import Link from "next/link";

//create a function to return an array of objects that have job role and experience as key/value pairs
const tern = {

};

const oslabs = {

};

const opendock = {

};

const apple = {


};

const jobArray = [tern, oslabs, opendock, apple];

//update array to have settimeout to cycle through roles
// pause settimeout on hover

function jobDisplay(){

};
//insert repo links for projects
export default function Page() {
  return ( <main>
            <h1>Experience</h1>

            <h1>Projects</h1>
                <ul>
                    <li>Klusterbud</li>
                    <li>ChromaCraze</li>
                    <li>Wobbejams</li>



                </ul>
                

            <footer>
              <Link href="/">
            Back Home
              </Link>
              <Link href="/about">
            About Me
              </Link>
              <Link href="/experience">
            Experience
              </Link>
              <Link href="/contact">
            Contact Me
              </Link>
            </footer>
            </main>
        );
}