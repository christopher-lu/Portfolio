import { siteConfig } from "@/data/siteConfig";

export default function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}#person`,
    name: siteConfig.name,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    image: new URL(siteConfig.socialImage, siteConfig.url).toString(),
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
    knowsAbout: siteConfig.technologies,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.applicationName,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: {
      "@id": `${siteConfig.url}#person`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website),
        }}
      />
    </>
  );
}