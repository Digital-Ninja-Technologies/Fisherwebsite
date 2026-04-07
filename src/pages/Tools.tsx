import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Calendar, Link2, FileText, ArrowRight } from "lucide-react";
import galaxyBg from "@/assets/galaxy-bg.jpg";

const tools = [
  {
    icon: Calendar,
    emoji: "📅",
    title: "Release Planner",
    desc: "Plan your music releases with a clear release calendar.",
    status: "Launch Tool →",
    available: true,
  },
  {
    icon: Link2,
    emoji: "🔗",
    title: "Bio Link Generator",
    desc: "Create a beautiful link-in-bio page for all your music and social links.",
    status: "Coming Soon",
    available: false,
  },
  {
    icon: FileText,
    emoji: "📰",
    title: "Press Kit Builder",
    desc: "Generate professional press kits for media outreach and brand awareness.",
    status: "Coming Soon",
    available: false,
  },
];

const Tools = () => {
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
            Smart tools for your music releases
          </h1>
          <p className="text-lg text-muted-foreground">
            The best tools to help you plan, promote, and succeed with your music releases
          </p>
        </div>
      </section>

      {/* Tool Cards */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {tools.map((tool) => (
              <div key={tool.title} className="glass-card rounded-2xl p-8 text-center hover:border-primary/40 transition-colors">
                <span className="text-4xl mb-6 block">{tool.emoji}</span>
                <h3 className="text-xl font-bold text-foreground mb-3">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{tool.desc}</p>
                <span className={`inline-flex items-center gap-1 text-sm font-semibold ${tool.available ? "text-primary cursor-pointer hover:underline" : "text-muted-foreground"}`}>
                  {tool.status}
                  {tool.available && <ArrowRight size={14} />}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Tools;
