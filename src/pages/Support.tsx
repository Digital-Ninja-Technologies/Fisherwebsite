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
    q: "How long does it take to release my music?",
    a: "It takes 3 - 7 working days to get songs through copyright moderation before they begin to appear on Digital Music Platforms. Please allow for this timeframe when choosing a release date.",
  },
  {
    q: "When and how will I get paid my royalties?",
    a: "After a release goes live, stores send us reports on the streams. These reports start coming in 45 - 75 days after a release goes live. Once the earnings are above the $50 threshold, you can request a withdrawal and payment will be processed into your local bank account in 7 - 14 working days.",
  },
  {
    q: "Do I get to keep 100% of my earnings?",
    a: "Yes, you get to keep 100% of your streaming royalties.",
  },
  {
    q: "Are Editorial Playlists guaranteed?",
    a: "No, editorial playlists are not guaranteed. While we can submit your music for consideration, placement ultimately depends on the curators' selection criteria. However, for Boomplay and Audiomack Editorial Playlists, we can get your song on them even if your release is live already.",
  },
  {
    q: "How can I promote my music to a wider audience?",
    a: "We offer a wide range of promotional services including playlisting, radio and blog promotions, TikTok Campaigns and more. Visit the pricing section to see the services we offer.",
  },
  {
    q: "What is a Pre-Save Link?",
    a: "A Pre-save link allows your fans to save your release on their preferred streaming platform before it comes out on the release date.",
  },
  {
    q: "Are there any side effects of using your promotional services?",
    a: "No. All the promotional services we provide are organically generated and we strongly kick against bot streams, false marketing or playlist manipulation on our platform.",
  },
  {
    q: "How we handle Artificial (Bot) Streaming",
    a: "Our streaming partners are committed to ensuring that all streams on their platforms are legitimate. If artificial streaming is detected, corrective action may include removing inflated streams, withholding royalties, or permanently deleting your catalog.",
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
            Need Any Help?
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you have questions, need guidance, or run into issues, don't hesitate to reach out.
          </p>
          <a href="https://wa.me/message/UAKWEBDKKOSVF1" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold">
            Contact Us <ArrowRight size={18} />
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
          <h2 className="text-2xl font-bold text-foreground mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-8">
            Can't find the answers you are looking for? You can contact us and we'd be able to answer any questions you have.
          </p>
          <a href="https://wa.me/message/UAKWEBDKKOSVF1" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold mb-8">
            Contact Us <ArrowRight size={18} />
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
