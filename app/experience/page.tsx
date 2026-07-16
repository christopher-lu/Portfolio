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
                

            <footer className="mt-auto pt-12">
                <nav className="flex flex-wrap justify-center gap-6 text-blue-600">
                    <Link
                     href="/"
                    className="underline hover:text-blue-800 transition-colors"
                >
                        Back Home
                    </Link>

                    <Link
                     href="/about"
                    className="underline hover:text-blue-800 transition-colors"
                    >
                        About Me
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