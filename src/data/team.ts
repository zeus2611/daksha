export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  tags: string[];
  socials: Partial<Record<"github" | "linkedin" | "twitter", string>>;
  initials: string;
  image: string | null;
}

export const team: TeamMember[] = [
  {
    name: "Nischay",
    role: "Full-Stack Developer",
    bio: "Builds the backend systems, APIs, and complex web platforms. Obsessed with clean architecture and performance.",
    tags: ["Python", "Google Cloud", "OpenAI", "TypeScript"],
    socials: {
      github: "https://github.com/zeus2611",
      linkedin: "https://www.linkedin.com/in/nischay-2604/",
    },
    initials: "FS",
    image: "/images/nischay.png",
  },
  {
    name: "Shivanshu Singh",
    role: "Mobile Developer",
    bio: "Flutter specialist with a sharp eye for UI. Builds cross-platform apps that feel native on both iOS and Android.",
    tags: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
    socials: {
      github: "https://github.com/Shivanshu97i",
      linkedin: "https://www.linkedin.com/in/shivanshu-singh-4454311b8/",
    },
    initials: "MD",
    image: "/images/shivanshu.jpeg",
  },
  {
    name: "Rithik Kasera",
    role: "Brand & UX Designer",
    bio: "Translates complex ideas into clean, trustworthy visual systems. From logo to pixel-perfect UI, every detail is intentional.",
    tags: ["Figma", "Branding", "UI/UX", "Design Systems"],
    socials: {
      linkedin: "https://www.linkedin.com/in/rithik-kasera310/",
    },
    initials: "DE",
    image: "/images/rithik.jpeg",
  },
  {
    name: "Aditya Singh",
    role: "Marketing Strategist",
    bio: "Drives organic growth through SEO, content, and community. Focuses on systems that compound rather than campaigns that expire.",
    tags: ["SEO", "Content Strategy", "Analytics", "Community"],
    socials: {
      linkedin: "https://www.linkedin.com/in/aditya-singh-journll/",
    },
    initials: "MS",
    image: null,
  },
  {
    name: "Rizwal Abrol",
    role: "Video & Graphics",
    bio: "Turns products into stories. From launch videos to testimonial edits, creates visual content that converts.",
    tags: ["After Effects", "Premiere Pro", "Motion", "3D"],
    socials: {
      linkedin: "https://www.linkedin.com/in/rizwal-abrol007/",
    },
    initials: "VG",
    image: null,
  },
];
