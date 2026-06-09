export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    url: "https://github.com/fadhika",
    label: "GitHub Profile",
  },
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/fadhika",
    label: "LinkedIn Profile",
  },
  {
    platform: "email",
    url: "mailto:fadhika@example.com",
    label: "Email Address",
  },
];

export const cvPath = "/cv/cv-fadhika.pdf";
