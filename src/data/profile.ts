export interface Profile {
  name: string;
  title: string;
  typewriterRoles: string[];
  tagline: string;
  shortBio: string;
  longBio: string;
  profileImage: string;
  personalValues: {
    title: string;
    description: string;
  }[];
}

export const profile: Profile = {
  name: "Fadhika",
  title: "Junior Software Engineer",
  typewriterRoles: [
    "Frontend Developer",
    "Backend Integrator",
    "TypeScript Enthusiast",
    "Problem Solver",
  ],
  tagline: "Building clean, performant, and user-centric web applications.",
  shortBio:
    "I am a passionate Junior Software Engineer based in Indonesia, specializing in React, Next.js, and TypeScript development. I love building web interfaces that provide great user experiences while keeping the backend clean and solid.",
  longBio:
    "I began my journey in software development by building web automation scripts, which quickly evolved into a passion for full-stack web applications. I focus on writing clean, type-safe, and self-documenting code. I enjoy working on modern web stacks like Next.js, Tailwind CSS, PostgreSQL, and Node.js, always aiming to learn best practices and optimize web performance.",
  profileImage: "/images/profile/profile.jpg",
  personalValues: [
    {
      title: "Clean Code",
      description:
        "I believe in writing code that is easy to read, self-documenting, and maintainable for team members.",
    },
    {
      title: "Continuous Learning",
      description:
        "Technology moves fast. I dedicate time weekly to read documentation, try new libraries, and improve my coding patterns.",
    },
    {
      title: "User-Centric Design",
      description:
        "A feature is only as good as its usability. I prioritize accessibility, clean layout flows, and micro-interactions.",
    },
  ],
};
