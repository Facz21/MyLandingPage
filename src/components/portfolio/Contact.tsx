import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section } from "./Section";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Message sent", { description: "Thanks — I'll get back to you shortly." });
    }, 600);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something solid">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Have an API to design, a legacy system to untangle, or infrastructure that needs a
            steady hand? Send a message and let&apos;s talk.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="surface-card space-y-4 p-6 hover:translate-y-0">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Ada Lovelace" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@company.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required rows={5} placeholder="Tell me about your project..." />
          </div>
          <Button type="submit" variant="hero" size="lg" disabled={sending} className="w-full">
            {sending ? "Sending..." : "Send"} <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Section>
  );
}
