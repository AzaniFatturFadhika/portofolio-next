import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "DevStore Dashboard",
    description: "A comprehensive e-commerce admin panel featuring real-time sales analytics and inventory management.",
    longDescription:
      "DevStore Dashboard is a fully-featured administrative portal built for online merchants. It delivers actionable sales insights, dynamically aggregates product statistics, and allows complete inventory management through a secure interface.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Recharts"],
    category: "Web",
    githubUrl: "https://github.com/fadhika/devstore-dashboard",
    demoUrl: "https://devstore-dashboard.demo.com",
    image: "/images/projects/project-1.png",
    features: [
      "Real-time revenue and sales charts using Recharts.",
      "Inventory tracking with low-stock automatic alert tags.",
      "Secure user role authentication and role-based actions.",
      "Dynamic tables with pagination, sorting, and text filter queries.",
    ],
    challenges:
      "Aggregating large datasets of transactions on the server caused noticeable layout shifts and slow response times on slow connections.",
    solutions:
      "Implemented server-side pagination and caching with Prisma, and added React Suspense skeletons to keep page transitions instant and smooth.",
  },
  {
    id: "project-2",
    title: "PulseFit Tracker",
    description: "A cross-platform mobile application designed to track fitness goals, workouts, and daily nutrition.",
    longDescription:
      "PulseFit is a modern mobile tracker helping health-conscious users plan workouts, count calories, and visualize weekly achievements. It operates smoothly offline and synchronizes data to a backend once connection is restored.",
    techStack: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "SQLite"],
    category: "Mobile",
    githubUrl: "https://github.com/fadhika/pulsefit-tracker",
    image: "/images/projects/project-2.png",
    features: [
      "Custom routine builders with automatic exercise timers.",
      "Nutrition scanning logging and daily calorie trackers.",
      "Offline database support storing local data in SQLite.",
      "Weekly analytics reporting via beautiful native layout charts.",
    ],
    challenges:
      "Synchronizing SQLite offline logs with remote API databases while resolving timestamp and data ordering conflicts.",
    solutions:
      "Created a robust queue system that registers state mutations, sorting and resolving actions chronologically with exponential retry backoffs.",
  },
  {
    id: "project-3",
    title: "GatewayX Microservice API",
    description: "An API gateway microservice configured with rate limiting, logging, and CORS request dispatchers.",
    longDescription:
      "GatewayX functions as a centralized gateway routing requests between frontend layers and back-end microservices. It features custom token parsing, high-speed rate-limiting, and comprehensive logging pipelines.",
    techStack: ["Node.js", "Express", "TypeScript", "Redis", "Docker", "Winston"],
    category: "API",
    githubUrl: "https://github.com/fadhika/gatewayx-api",
    image: "/images/projects/project-3.png",
    features: [
      "Sub-millisecond token authentication checks powered by Redis caching.",
      "IP-based and account-based rate limiting configurations.",
      "Centralized CORS, security headers, and request forwarding pipelines.",
      "Structured log pipelines streaming warning flags and error logs.",
    ],
    challenges:
      "Handling thousands of concurrent authorization requests created database connection bottlenecks.",
    solutions:
      "Offloaded token validations to an in-memory Redis store, resolving cache hits instantly and reducing backend database queries by 85%.",
  },
];
