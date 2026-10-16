import idMessages from "../../messages/id.json";
import enMessages from "../../messages/en.json";
import { socialLinks } from "@/data/socials";
import { skills } from "@/data/skills";
import { profile } from "@/data/profile";

const messagesByLocale: Record<string, typeof idMessages> = {
  id: idMessages,
  en: enMessages,
};

export function getPersonSchema(locale = "id") {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fadhika.vercel.app";
  const sameAsUrls = socialLinks.map((link) => link.url);
  const skillNames = skills.map((skill) => skill.name);
  const t = messagesByLocale[locale] ?? messagesByLocale.id;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: t.Profile.title,
    url: `${baseUrl}/${locale}`,
    image: `${baseUrl}${profile.profileImage}`,
    sameAs: sameAsUrls,
    description: t.Profile.tagline,
    knowsAbout: skillNames,
    worksFor: {
      "@type": "Organization",
      name: "TechLabs Inc.",
    },
  };
}
