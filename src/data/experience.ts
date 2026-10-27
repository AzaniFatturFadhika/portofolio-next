import { ExperienceEntry } from "@/types/experience";

export const experiences: ExperienceEntry[] = [
  {
    id: "exp-1",
    role: "D4 Teknologi Rekayasa Komputer",
    institution: "Politeknik Negeri Semarang.",
    period: "Aug 2023 - Present",
    type: "education",
    description:
      "In this degree program, I have studied various areas of information technology, including system design and architecture, UI/UX design, computer programming using C, Python, and React, as well as computer networks and cybersecurity. In addition, my knowledge encompasses the application of artificial intelligence, machine learning, deep learning, big data analysis, and microcontroller-based development.",
    achievements: [
      "Architected end-to-end system logic and relational database schemas for both an Event Management System (Polivent) and 'E-Desa', a digital village administration platform.",
      "Engineered and integrated Role-Based Access Control (RBAC) into the 'Polivent' Event Management System to ensure secure multi-tier user authorization.",
      "Developed a real-time weather monitoring system by integrating microcontroller LoRa communication, MQTT data telemetry to a Python backend, and training a RandomForestRegressor model for micro-climate forecasting.",
      "Optimized ESP32 hardware execution speed using direct GPIO memory-mapped register access for an RC Soccer Car, paired with a custom React Native remote control application built using AI agent workflows.",
    ],
  },
  {
    id: "exp-2",
    role: "IT Support Assistant",
    institution: "CV Trio Plaza Wonosobo",
    period: "Mar 2022 - Jul 2022",
    type: "internship",
    description:
      "An IT Support Assistant responsible for the maintenance and troubleshooting of computer hardware, computer assembly, POS system installation, and maintenance of the company’s physical server equipment, as well as other tasks related to these areas.",
    achievements: [
      "Replaced damaged computer hardware and printers.",
      "Assembled computer systems and installed the operating system and POS system.",
      "cleaned the computers; and sorted the damaged hardware into groups,",
    ],
  },
  {
    id: "exp-3",
    role: "Rekayasa Perangkat Lunak",
    institution: "SMK Negeri 1 Wonosobo",
    period: "Jul 2020 - May 2023",
    type: "education",
    description:
      "Learning about software engineering, including Java OOP, the basics of C, native PHP, and the final project",
    achievements: [
      "Developing a PHP project—an inventory management system. The system is designed to manage and track inventory stock, orders, supplier, and purchasing.",
    ],
  },
];
