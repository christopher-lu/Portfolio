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