import Link from "next/link";
import { RiTwitterXFill, RiLinkedinFill, RiGithubFill, RiInstagramFill, RiBehanceFill } from "react-icons/ri";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Web Development", href: "/services#web" },
    { label: "Mobile Apps", href: "/services#mobile" },
    { label: "Branding & Design", href: "/services#design" },
    { label: "Video & Content", href: "/services#video" },
    { label: "Marketing & SEO", href: "/services#marketing" },
  ],
};

const socials = [
  { icon: RiTwitterXFill, href: "#", label: "X (Twitter)" },
  { icon: RiLinkedinFill, href: "#", label: "LinkedIn" },
  { icon: RiGithubFill, href: "#", label: "GitHub" },
  { icon: RiInstagramFill, href: "#", label: "Instagram" },
  { icon: RiBehanceFill, href: "#", label: "Behance" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-display font-800 text-xl tracking-tight text-text hover:text-accent transition-colors"
            >
              DAKSHA
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              Precision-built digital products for startups and solopreneurs
              who mean business.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-lg text-muted hover:text-text hover:bg-surface-2 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-display font-600 uppercase tracking-widest text-subtle mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-text transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-subtle">
            &copy; {new Date().getFullYear()} Daksha. All rights reserved.
          </p>
          <p className="text-xs text-subtle">
            Built with precision in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
