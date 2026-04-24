export interface ProjectChallenge {
  title: string;
  desc: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  status: "Shipped" | "Building" | "Paused";
  tagline: string;
  overview: string;
  services: string[];
  challenges: ProjectChallenge[];
  stack: string[];
  results: string[];
  // card/listing fields
  desc: string;
  tags: string[];
  highlight: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "journll-insights",
    title: "Journll Insights",
    category: "SaaS / Market Intelligence",
    year: "2025",
    status: "Shipped",
    tagline: "AI-powered Reddit analytics that tells founders what the market actually wants.",
    overview:
      "Journll Insights is a market intelligence SaaS built for Gen Z founders who need to validate ideas before committing their time and money. The platform analyzes Reddit conversations at scale using AI — surfacing pain points, emerging trends, lead opportunities, and freelance gigs hiding in plain sight. We built the entire product from scratch: architecture, AI pipeline, dashboard, and landing page.",
    services: [
      "Full-stack SaaS development",
      "AI / LLM integration pipeline",
      "Reddit API ingestion & analysis",
      "Subscription & billing (Stripe)",
      "Dashboard UI design & development",
      "Marketing landing page",
      "Community setup (Slack)",
    ],
    challenges: [
      {
        title: "Reddit data at scale",
        desc: "Fetching, parsing, and scoring thousands of Reddit posts in near real-time required a robust ingestion pipeline with rate-limit handling, deduplication, and intelligent caching to stay responsive without burning API quota.",
      },
      {
        title: "Signal vs. noise",
        desc: "Reddit is full of off-topic tangents and irrelevant content. We built custom LLM prompt chains to classify posts by intent — pain points, trends, leads, gigs — with confidence scoring so founders only see what matters.",
      },
      {
        title: "Founder-first UX",
        desc: "Most analytics tools are built for enterprise teams. We designed the entire experience around the solo founder mindset: fast, opinionated defaults, no bloated dashboards — just the insight you need to decide whether to build.",
      },
    ],
    stack: [
      "Next.js", "TypeScript", "Tailwind CSS",
      "OpenAI", "Reddit API",
      "PostgreSQL", "Stripe",
      "Vercel",
    ],
    results: [
      "Platform shipped and live at journllinsights.app",
      "AI analyzes Reddit conversations across targeted subreddits",
      "Features: pain point mining, trend detection, lead finding, freelance gig discovery",
      "Best-time-to-post feature to maximize reach for founders",
      "Subscription model live with Stripe billing",
      "Active founder community via Slack",
    ],
    desc: "Full-stack SaaS that uses AI to analyze Reddit conversations and surface startup ideas, pain points, leads, and market trends for founders.",
    tags: ["Next.js", "AI/LLM", "SaaS", "Reddit API", "Stripe"],
    highlight: "AI Reddit analytics + subscription SaaS + shipped solo",
    liveUrl: "https://journllinsights.app",
  },
  {
    slug: "bridgetalk",
    title: "BridgeTalk",
    category: "EdTech Platform",
    year: "2024 – Present",
    liveUrl: "https://www.bridgetalk.ai",
    status: "Building",
    tagline: "From zero to a fully shipped digital product for TOEFL/IELTS test takers.",
    overview:
      "BridgeTalk is an EdTech platform designed for TOEFL and IELTS test takers, with plans to expand into the broader ESL (English as a Second Language) market. We partnered with the founder from day one to build the entire digital stack — mobile app, web presence, B2B infrastructure, and marketing engine.",
    services: [
      "Flutter Mobile App (iOS & Android)",
      "Marketing Landing Page (Next.js)",
      "B2B Portal for institutional clients",
      "User dashboard for students",
      "Product launch video",
      "Testimonial video editing",
      "SEO strategy & implementation",
      "Community building playbook",
    ],
    challenges: [
      {
        title: "Cross-platform from day one",
        desc: "The client needed both iOS and Android simultaneously with a native-feel UX and a tight timeline. Flutter allowed us to ship both platforms from a single codebase without sacrificing performance.",
      },
      {
        title: "Multi-audience web presence",
        desc: "The platform serves both individual learners and institutional B2B clients — two very different user journeys. We designed separate portals while maintaining a unified brand language.",
      },
      {
        title: "Marketing before launch",
        desc: "Video content was needed to drive pre-launch signups. We handled full production of the landing page video and edited testimonials from early beta users.",
      },
    ],
    stack: [
      "Flutter", "Dart", "Firebase", "Appwrite",
      "Next.js", "TypeScript", "Tailwind CSS",
      "Python", "OpenAI", "Deepgram",
      "Google Cloud Platform", "Google Analytics",
      "Figma", "Premiere Pro",
    ],
    results: [
      "Shipped mobile app to App Store & Play Store",
      "Landing page live with product explainer video",
      "B2B portal handling institutional inquiries",
      "SEO foundation in place for organic growth",
    ],
    desc: "End-to-end digital suite for a TOEFL/IELTS prep platform. Mobile app, web presence, B2B tools, video production, and ongoing growth marketing.",
    tags: ["Mobile App", "Web Dev", "Video", "SEO", "Branding"],
    highlight: "Flutter app + Next.js platform + full video suite",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getLatestProjects(count = 3): Project[] {
  return projects.slice(0, count);
}
