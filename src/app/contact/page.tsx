"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, MapPin, Clock } from "lucide-react";

const details = [
  {
    icon: Calendar,
    label: "Book a call",
    value: "30-minute discovery, free",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "hello@daksha.studio",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "India — remote-native worldwide",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-display font-600 uppercase tracking-widest text-accent">
            Contact
          </span>
          <h1 className="mt-3 font-display font-800 text-5xl md:text-6xl text-text tracking-tight mb-6">
            Let&apos;s talk
            <br />
            <span className="text-muted">about your project.</span>
          </h1>
          <p className="text-muted leading-relaxed mb-12">
            Book a free 30-minute discovery call. We&apos;ll ask about your
            product, your timeline, and your goals — then tell you honestly
            whether and how we can help.
          </p>

          <div className="space-y-6">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-subtle font-medium uppercase tracking-widest mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm text-muted">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Cal.com embed placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="p-8 rounded-2xl border border-border-subtle bg-surface">
            <h2 className="font-display font-700 text-xl text-text mb-2">
              Book a discovery call
            </h2>
            <p className="text-sm text-muted mb-6">
              Pick a time that works. No prep needed — just bring your idea.
            </p>

            <iframe
              src="https://cal.com/its-nischay/30min?embed=true"
              className="w-full rounded-xl border-0"
              style={{ height: 520 }}
              title="Book a 30-minute discovery call"
            />

            <a
              href="https://cal.com/its-nischay/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-accent text-accent-fg text-sm font-display font-600 hover:opacity-90 transition-opacity"
            >
              <Calendar size={15} />
              Open full booking page →
            </a>

            <p className="mt-4 text-xs text-subtle text-center">
              Prefer email?{" "}
              <a
                href="mailto:hello@daksha.studio"
                className="text-accent hover:underline"
              >
                hello@daksha.studio
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
