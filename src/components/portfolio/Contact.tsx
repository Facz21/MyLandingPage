import { useState } from "react";
import { Check, Copy, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import { Section } from "./Section";
import { useLanguage } from "@/context/language-context";

const EMAIL = "afcortes.dev@gmail.com";
const GITHUB_URL = "https://github.com/Facz21";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/andr%C3%A9s-felipe-cort%C3%A9s-zambrano-b01310283/";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success(t.contact.emailToastSuccess, {
        description: EMAIL,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error(t.contact.emailToastError, {
        description: `${t.contact.emailDirectPrompt} ${EMAIL}`,
      });
    }
  };

  return (
    <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title}>
      <div className="max-w-2xl space-y-6">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.contact.description}
        </p>

        {/* Minimal Contact Channels */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Email Copy Button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="group inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-surface/70 px-4 py-2 font-mono text-xs font-medium text-foreground backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent sm:text-sm"
            title={t.contact.emailCopy}
          >
            <Mail className="h-4 w-4 text-accent transition-transform group-hover:scale-110" />
            <span>{EMAIL}</span>
            {copied ? (
              <span className="inline-flex items-center gap-1 text-xs text-accent">
                <Check className="h-3.5 w-3.5" />
                {t.contact.emailCopied}
              </span>
            ) : (
              <Copy className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-accent" />
            )}
          </button>

          {/* LinkedIn Link */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/70 px-4 py-2 font-mono text-xs font-medium text-foreground backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent sm:text-sm"
          >
            <Linkedin className="h-4 w-4 text-accent transition-transform group-hover:scale-110" />
            <span>LinkedIn</span>
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-accent" />
          </a>

          {/* GitHub Link */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/70 px-4 py-2 font-mono text-xs font-medium text-foreground backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent sm:text-sm"
          >
            <Github className="h-4 w-4 text-accent transition-transform group-hover:scale-110" />
            <span>GitHub</span>
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-accent" />
          </a>
        </div>

        {/* Location & Remote Availability */}
        <p className="flex items-center gap-2 pt-2 font-mono text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          {t.contact.remoteStatus}
        </p>
      </div>
    </Section>
  );
}
