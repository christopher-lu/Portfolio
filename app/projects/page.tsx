import Link from "next/link";

//create a function that returns an array of publications

//create variables with href to link to publications

export default function Page() {
  return ( <main>
            <h1>Publications</h1>

            <h2>Klusterbud: Kubernetes monitoring tool</h2>

            <Link href="https://medium.com/@AMitchell-Smith/klusterbud-k8s-anomaly-detection-made-simple-060ca496aebc">KlusterBud: K8s anomaly detection made simple</Link>

            <h2>Caseblinks Software Engineer Speaking Series </h2>
                <h3>GraphQL: GraphQL vs REST</h3>
                    <p>Panel discussion on utilization of GraphQL and Representational State Transfer use cases and benefits of each.</p>
                

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
                    href="/experience"
                    className="underline hover:text-blue-800 transition-colors"
                    >
                        Experience
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