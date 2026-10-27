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
  name: "Azani Fattur Fadhika",
  title: "Junior Software/System Engineer",
  typewriterRoles: [
    "System/Software Enginner",
    "AI Generalist",
    // "IoT Enthusiast",
    "Full-Stack Developer",
    "Problem Solver",
  ],
  tagline: "Making Technology Work for People.",
  shortBio:
    "I am an enthusiastic junior software or systems engineer based in Indonesia, specializing in React, Next.js, and TypeScript development. I enjoy building systems that provide solutions to real-world problems.",
  longBio:
    "I began my journey in software development by building web automation scripts, which quickly evolved into a passion for full-stack web applications. I focus on writing clean, type-safe, and self-documenting code. I enjoy working on modern web stacks like Next.js, Tailwind CSS, PostgreSQL, and Node.js, I began my software development journey by writing my first web scripts in PHP, which quickly evolved into a deep passion for building full-stack TypeScript applications. My primary focus is on software architecture—specifically writing clean, type-safe, and self-documenting code. I enjoy working with modern web stacks, including Next.js, Tailwind CSS, PostgreSQL, and Node.js, while constantly striving to master best practices and optimize system performance. Recently, I have been diving into Spec-Driven Development (SDD) and leveraging AI coding assistants to accelerate my workflow and bring my projects to life more efficiently. Let's connect!always aiming to learn best practices and optimize web performance.",
  profileImage: "/images/profile/profile.jpg",
  personalValues: [
    {
      title: "Purpose-Driven Architecture",
      description:
        "I focus on clean architecture and clear domain boundaries, ensuring the tech stack and system design are precisely tailored to the end-user's needs.",
    },
    {
      title: "Systems Thinking",
      description:
        "I thrive on breaking down complex challenges, deeply understanding the underlying mechanics, and designing precise, solid logic to handle them effectively.",
    },
    {
      title: "AI-Accelerated Development",
      description:
        "I constantly explore new technologies and leverage AI coding agents to accelerate development workflows, building projects faster while hitting exact targets.",
    },
    // {
    //   title: "Engineering Excellence",
    //   description:
    //     "I am dedicated to mastering modern workflows—such as Spec-Driven Development—and applying industry best practices to ensure high-quality project execution.",
    // },
  ],
};
