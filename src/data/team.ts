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
    role: "Backend & Systems",
    bio: "Built the backend and system architecture for both BridgeTalk and Journll Insights. Owns the infra, APIs, and AI pipelines that keep products running.",
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
    role: "Mobile & Frontend Developer",
    bio: "Built the Flutter app and web frontend for both BridgeTalk and Journll Insights. Delivers UIs that feel native — shipped to App Store & Play Store.",
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
    bio: "Designed BridgeTalk's full brand identity and UI system end-to-end. Translates complex ideas into clean, trustworthy visual systems.",
    tags: ["Figma", "Branding", "UI/UX", "Design Systems"],
    socials: {
      linkedin: "https://www.linkedin.com/in/rithik-kasera310/",
    },
    initials: "DE",
    image: "/images/rithik.jpeg",
  },
  {
    name: "Aditya Singh",
    role: "Growth & Launch Strategy",
    bio: "Built BridgeTalk's SEO foundation and community launch playbook. Drives organic growth systems that compound over time, not campaigns that expire.",
    tags: ["SEO", "Content Strategy", "Analytics", "Community"],
    socials: {
      linkedin: "https://www.linkedin.com/in/aditya-singh-journll/",
    },
    initials: "AS",
    image: null,
  },
  {
    name: "Rizwal Abrol",
    role: "Motion & Visual Production",
    bio: "Produced BridgeTalk's launch video and testimonial edits. Turns products into stories — visual content that actually converts.",
    tags: ["After Effects", "Premiere Pro", "Motion", "3D"],
    socials: {
      linkedin: "https://www.linkedin.com/in/rizwal-abrol007/",
    },
    initials: "VG",
    image: "/images/rizwal.jpeg",
  },
];
