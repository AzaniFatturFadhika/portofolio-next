import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Avalis Inventory System",
    description:
      "A inventory management system for tracking goods, stock levels, and administrative operations.",
    longDescription:
      "Avalis Inventory is a robust management platform designed to streamline stock tracking and monitor warehouse items. It features an intuitive administrative interface to manage product data efficiently and ensure accurate real-time inventory visibility.",
    techStack: ["PHP", "Bootstrap", "MySQL"],
    category: "Web",
    githubUrl: "https://github.com/AzaniFatturFadhika/avalis_inventory",
    image: "/images/projects/avalis.png",
    features: [
      "Stock monitoring and data reporting.",
      "Dynamic product categorization and item management.",
    ],
    challenges:
      "Ensuring accurate data synchronization and preventing data race conditions during concurrent inventory updates.",
    solutions:
      "Implemented optimized server-side database queries and transaction handling to guarantee data integrity during stock adjustments.",
  },
  {
    id: "project-2",
    title: "Polivent (Polines Events)",
    description:
      "An integrated event management mobile application featuring Role-Based Access Control (RBAC).",
    longDescription:
      "Polivent is a centralized platform tailored for managing university events. It streamlines event registration, ticketing, and administrative oversight, utilizing complex state management to ensure a seamless and secure user experience for varying user roles.",
    techStack: ["Flutter", "Dart", "BLoC", "REST API"],
    category: "Mobile",
    githubUrl:
      "https://github.com/PBL-TI2B/event_app/tree/feature/implementation-bloc-state-management",
    image: "/images/projects/polivent.png",
    features: [
      "Role-Based Access Control (RBAC) for secure multi-tier user authorization.",
      "Complex application state handling using the BLoC pattern.",
      "End-to-end event registration and administrative workflows.",
      "Real-time updates for event schedules and attendee management.",
    ],
    challenges:
      "Managing complex, asynchronous user permissions and data flows across varying access levels without causing UI latency.",
    solutions:
      "Integrated the BLoC state management pattern to strictly separate business logic from the UI, ensuring predictable state transitions.",
  },
  {
    id: "project-3",
    title: "E-Desa (Sistem Informasi Desa Digital)",
    description:
      "A digital administration platform bridging village governance with community public services.",
    longDescription:
      "E-Desa is a comprehensive e-government web solution designed to digitize village administrative processes. Built upon a carefully architected relational database schema, it facilitates population data management and secure public record storage.",
    techStack: ["Vue.js", "Node.js", "PostgreSQL", "REST API", "Tailwind CSS"],
    category: "Web",
    githubUrl: "https://github.com/PBL-TI2B/sistem-penduduk-api-vue",
    image: "/images/projects/edesa.png",
    features: [
      "Architected system logic and relational database schemas for complex population data.",
      "Interactive public service portal for digital village administration.",
      "Secure API endpoints for sensitive demographic data processing.",
      "Responsive frontend dashboard built with Vue.js.",
    ],
    challenges:
      "Structuring a highly relational database capable of securely and efficiently handling complex demographic queries.",
    solutions:
      "Designed highly normalized relational database schemas and optimized API controllers, reducing query latency and ensuring robust data integrity.",
  },
  {
    id: "project-4",
    title: "WeatherNet IoT & AI Predictor",
    description:
      "An IoT-based weather monitoring system featuring LoRa communication, MQTT telemetry, and AI forecasting.",
    longDescription:
      "This project bridges hardware telemetry with machine learning to monitor and predict micro-climates in real-time. Microcontrollers collect atmospheric data, transmitting it via LoRa and MQTT to a Python backend, where an AI model processes the data for accurate weather predictions.",
    techStack: ["Python", "Flutter", "C", "LoRa", "MQTT", "ESP32"],
    category: ["IoT", "AI", "Mobile"],
    githubUrl: "https://github.com/AzaniFatturFadhika/weather-prediction",
    image: "/images/projects/weather.png",
    features: [
      "Long-range microcontroller communication integrated with LoRa modules.",
      "Real-time data telemetry routed through an MQTT broker to a Python backend.",
      "Predictive weather modeling using a trained RandomForestRegressor.",
      "Automated data ingestion and sensor monitoring pipeline.",
    ],
    challenges:
      "Ensuring reliable data transmission across hardware layers and preparing volatile sensor data for machine learning inference.",
    solutions:
      "Integrated an MQTT broker as a reliable intermediary and implemented data preprocessing in Python to ensure stable AI model inputs.",
  },
  {
    id: "project-5",
    title: "RC Soccer Car Controller",
    description:
      "A high-performance remote control system for an ESP32 RC car, paired with a React Native app.",
    longDescription:
      "Developed for a robotic soccer application, this project combines low-level hardware optimization with modern mobile development. The ESP32 firmware utilizes direct memory-mapped register access for ultra-fast GPIO response, controlled seamlessly via a custom mobile application.",
    techStack: ["React Native", "ESP32", "C/C++", "FreeRTOS", "WebSockets"],
    category: ["Mobile", "IoT", "Embedded"],
    githubUrl:
      "https://github.com/AzaniFatturFadhika/rc-car-esp32-controller-react-native",
    image: "/images/projects/rccar.png",
    features: [
      "Direct GPIO memory-mapped register access for near-instantaneous hardware execution.",
      "Cross-platform mobile remote control app built with React Native.",
      "Low-latency wireless communication protocol between the mobile app and microcontroller.",
      "Accelerated development and debugging workflows utilizing AI Agent assistance.",
    ],
    challenges:
      "Standard high-level GPIO libraries introduced unacceptable latency for real-time robotic soccer control.",
    solutions:
      "Bypassed standard libraries by implementing direct memory-mapped register manipulations on the ESP32, drastically reducing input lag and execution time.",
  },
];
