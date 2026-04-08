import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ArrowRight, ListMusic, TrendingUp, Tv, Radio, Share2, FileText, Music } from "lucide-react";
import galaxyBg from "@/assets/galaxy-bg.jpg";

const promoSteps = [
  { num: "1", title: "Create compelling music", desc: "Pour your creativity into tracks that resonate — strong artistry is the foundation of every successful campaign." },
  { num: "2", title: "Let us amplify it", desc: "We deploy targeted strategies to place your music where engaged listeners are already paying attention." },
  { num: "3", title: "Watch your audience grow", desc: "Sit back as your streams climb, your followers multiply, and new fans discover what you're all about." },
];

const services = [
  {
    title: "Curated & editorial playlist spots",
    desc: "Boost discoverability by landing on hand-picked playlists. We pitch your tracks to both editorial teams and independent curators to widen your listening base.",
    icon: ListMusic,
  },
  {
    title: "Chart climbing campaigns",
    desc: "Give your release the push it needs to break into top charts on Apple Music, Audiomack, and other major platforms — capturing attention right where it matters.",
    icon: TrendingUp,
  },
  {
    title: "Television & visual exposure",
    desc: "Amplify your music videos through premium TV channels and visual media outlets to reach audiences beyond the digital space.",
    icon: Tv,
  },
  {
    title: "Platform-specific boosts",
    desc: "Unlock dedicated promotional packages on Boomplay — from in-app pop-ups and push notifications to featured sections and trending placements.",
    icon: Music,
  },
  {
    title: "Radio airtime campaigns",
    desc: "Get your tracks spinning on influential radio stations locally and internationally to reach listeners who tune in daily.",
    icon: Radio,
  },
  {
    title: "Short-form video virality",
    desc: "Want your sound trending on TikTok? We coordinate with influencers of all sizes to create content around your track and spark organic momentum.",
    icon: Share2,
  },
  {
    title: "Blog & press coverage",
    desc: "Strengthen your brand by securing write-ups on widely-read music blogs and publications. Tell your story to readers actively seeking fresh talent.",
    icon: FileText,
  },
];

const Promotion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={galaxyBg} alt="Galaxy background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Take your music further than ever 🚀
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            Expand your listener base through playlist campaigns, broadcast placements, influencer activations, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/message/UAKWEBDKKOSVF1" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold">
              Launch a campaign <ArrowRight size={18} />
            </a>
            <a href="/pricing" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
              View rates
            </a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4">
        <div className="container">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2 text-center">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Marketing made simple</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            Amplify your reach and cultivate a loyal fanbase with our proven promotional strategies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {promoSteps.map((step) => (
              <div key={step.num} className="glass-card rounded-2xl p-8 text-center">
                <span className="inline-block w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-lg leading-10 mb-4">{step.num}</span>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 px-4">
        <div className="container space-y-16">
          {services.map((svc, i) => (
            <div key={svc.title} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-4">{svc.title}</h2>
                <p className="text-muted-foreground mb-6">{svc.desc}</p>
                <a href="/pricing" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                  View rates <ArrowRight size={16} />
                </a>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-64 h-64 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <svc.icon className="text-primary" size={80} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Promotion;
