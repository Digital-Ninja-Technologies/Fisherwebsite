import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import galaxyBg from "@/assets/galaxy-bg.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What's the typical turnaround for a new release?",
    a: "Releases generally go through a review process that takes 3–7 business days before appearing on streaming platforms. Keep this window in mind when selecting your launch date.",
  },
  {
    q: "How do royalty payments work?",
    a: "Streaming platforms send us earnings reports starting 45–75 days after your release goes live. Once your balance exceeds the $50 minimum threshold, you can request a payout, which is processed to your local bank within 7–14 business days.",
  },
  {
    q: "Will I keep all of my streaming revenue?",
    a: "Absolutely — you retain 100% of your streaming royalties with no hidden deductions.",
  },
  {
    q: "Can you guarantee placement on editorial playlists?",
    a: "Editorial playlist spots are never guaranteed since final decisions rest with each platform's curation team. That said, we actively pitch your music for consideration. For Boomplay and Audiomack editorials, we can secure placements even after your release is already live.",
  },
  {
    q: "What marketing options do you offer?",
    a: "Our promotional suite spans playlist campaigns, radio and TV placements, blog features, TikTok influencer activations, and more. Check the pricing page for the full breakdown of available services.",
  },
  {
    q: "What exactly is a pre-save link?",
    a: "A pre-save link lets your audience save your upcoming release to their preferred streaming app before launch day, so it appears in their library automatically on release.",
  },
  {
    q: "Are your promotional methods safe for my account?",
    a: "Yes. Every promotional service we provide uses organic, legitimate methods. We strictly prohibit bot-generated streams, misleading marketing, or any form of playlist manipulation.",
  },
  {
    q: "What happens if artificial streams are detected?",
    a: "Streaming partners actively monitor for illegitimate activity. If artificial streams are found, consequences can include removal of inflated play counts, withholding of associated royalties, or permanent catalog deletion.",
  },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com/ThePromoBoy" },
  { label: "WhatsApp", href: "https://wa.me/message/UAKWEBDKKOSVF1" },
  { label: "Instagram", href: "https://instagram.com/thepromoboy" },
  { label: "Twitter/X", href: "https://x.com/thepromoboy" },
  { label: "LinkedIn", href: "https://linkedin.com/in/thepromoboy" },
  { label: "YouTube", href: "https://youtube.com/@thepromoboyYT" },
];

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={galaxyBg} alt="Galaxy background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            We're here to help
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Got a question or running into something unexpected? Our team is just a message away.
          </p>
          <a href="https://wa.me/message/UAKWEBDKKOSVF1" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold">
            Get in touch <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4">
        <div className="container max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-2xl border-border px-6">
                <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still need help */}
      <section className="py-20 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Didn't find your answer?</h2>
          <p className="text-muted-foreground mb-8">
            Reach out directly and we'll get back to you with the info you need.
          </p>
          <a href="https://wa.me/message/UAKWEBDKKOSVF1" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold mb-8">
            Message us <ArrowRight size={18} />
          </a>
          <div className="flex flex-wrap gap-3 justify-center">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
