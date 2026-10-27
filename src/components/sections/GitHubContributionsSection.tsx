"use client";

import { motion } from "framer-motion";
import { githubProfile } from "@/data/github";
import Container from "@/components/ui/Container";

export function GitHubContributionsSection() {
  const { username, profileUrl } = githubProfile;

  return (
    <section id="github" className="py-24 bg-card/40 border-y border-border/50">
      <Container>
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            GitHub Contributions
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
          <p className="text-muted-foreground text-sm max-w-md mt-2">
            My open-source activity and contribution history on GitHub.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto rounded-2xl bg-card border border-border/80 shadow-sm p-4 sm:p-6 overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary dark:hover:text-accent transition-colors"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            @{username}
            </a>
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-muted-foreground hover:text-primary dark:hover:text-accent transition-colors"
            >
              View profile
            </a>
          </div>

          <div className="w-full overflow-x-auto">
          {/* eslint-disable-next-line @next/next/no-img-element -- External contribution graph from ghchart */}
          <img
            src={`https://ghchart.rshah.org/3b82f6/${username}`}
              alt={`${username} GitHub contribution graph`}
              className="block dark:hidden w-full h-auto"
              loading="lazy"
            />
          {/* eslint-disable-next-line @next/next/no-img-element -- External contribution graph from ghchart */}
          <img
            src={`https://ghchart.rshah.org/818cf8/${username}`}
              alt={`${username} GitHub contribution graph`}
              className="hidden dark:block w-full h-auto"
              loading="lazy"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default GitHubContributionsSection;
