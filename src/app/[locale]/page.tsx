import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import { getPersonSchema } from "@/lib/jsonld";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home(props: HomeProps) {
  const { locale } = await props.params;
  setRequestLocale(locale as (typeof routing.locales)[number]);
  const schema = getPersonSchema(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
