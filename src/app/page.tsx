import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import GitHubContributionsSection from "@/components/sections/GitHubContributionsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import { selectLatest } from "@/lib/articles";
import { getArticles } from "@/lib/cms";
import { getPersonSchema } from "@/lib/jsonld";

export default async function Home() {
  const schema = getPersonSchema();
  const articles = await getArticles();

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
    <GitHubContributionsSection />
    <ExperienceSection />
      <BlogSection articles={selectLatest(articles, 3)} />
      <ContactSection />
    </>
  );
}
