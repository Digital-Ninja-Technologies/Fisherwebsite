import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ArrowRight, Music, Send, DollarSign, Video, Mic2, Shield } from "lucide-react";
import galaxyBg from "@/assets/galaxy-bg.jpg";

const steps = [
  {
    num: "1",
    title: "Send Us Your Music",
    desc: "Send us your tracks, artwork, lyrics and release information and your music will be scheduled for a release date that you get to pick.",
    icon: Send,
  },
  {
    num: "2",
    title: "We Send It to Stores",
    desc: "We will send your release to all of the selected stores and streaming services worldwide and have your music live in no time.",
    icon: Music,
  },
  {
    num: "3",
    title: "Make Your Money",
    desc: "Every time you get streams or downloads on these streaming platforms, you get paid, and can get that money when you want.",
    icon: DollarSign,
  },
];

const features = [
  {
    title: "Put yourself out there",
    desc: "Get your tracks on major streaming platforms like Spotify, Apple Music, Amazon, Deezer, and more. Allow fans use your songs on major socials including Facebook, Instagram, TikTok and Snapchat.",
    icon: Music,
  },
  {
    title: "Distribute Your Music Videos",
    desc: "Expand your audience by distributing your music videos through our platform. Reach new fans by getting your music videos on Vevo, Apple Music, YouTube, Tidal and Boomplay.",
    icon: Video,
  },
  {
    title: "Get your lyrics time-synced",
    desc: "Make it enjoyable for fans listening to your music by activating time-synced lyrics on your songs. Allow listeners feel the passion in your song and sing along.",
    icon: Mic2,
  },
  {
    title: "Keep 100% Of Your Earnings",
    desc: "We believe artists should maintain their independence, maintain full control over their masters, and not be constrained by unethical agreements and dubious commercial contracts.",
    icon: Shield,
  },
];

const Distribution = () => {
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
            Distribute your music worldwide
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            Get your music on Spotify, Apple Music, Deezer, YouTube, Tidal, Instagram, TikTok and more. Keep 100% ownership of your music and stay in control of your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/message/UAKWEBDKKOSVF1" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold">
              Get started <ArrowRight size={18} />
            </a>
            <a href="/pricing" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
              See pricing
            </a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4">
        <div className="container">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2 text-center">Steps to take</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
            How to sell your music
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            Getting your music into stores and on streaming sites and beginning to earn money from it has never been simpler.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="glass-card rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="text-primary" size={24} />
                </div>
                <span className="text-xs text-primary font-bold">Step {step.num}</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container space-y-16">
          {features.map((feat, i) => (
            <div key={feat.title} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-4">{feat.title}</h2>
                <p className="text-muted-foreground mb-6">{feat.desc}</p>
                <a href="https://wa.me/message/UAKWEBDKKOSVF1" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                  Get started <ArrowRight size={16} />
                </a>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-64 h-64 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <feat.icon className="text-primary" size={80} />
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

export default Distribution;
