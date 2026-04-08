import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ArrowRight, Music, Send, DollarSign, Video, Mic2, Shield } from "lucide-react";
import galaxyBg from "@/assets/galaxy-bg.jpg";

const steps = [
  {
    num: "1",
    title: "Submit Your Tracks",
    desc: "Upload your audio files, cover art, and release details. Pick a launch date that works for you and we'll handle the rest.",
    icon: Send,
  },
  {
    num: "2",
    title: "We Deliver Everywhere",
    desc: "Your release is pushed to every major streaming service and digital storefront worldwide within days.",
    icon: Music,
  },
  {
    num: "3",
    title: "Collect Your Revenue",
    desc: "Each play and download generates earnings that flow directly to your account — withdraw whenever you like.",
    icon: DollarSign,
  },
];

const features = [
  {
    title: "Reach listeners globally",
    desc: "Your tracks go live on leading platforms like Spotify, Apple Music, Amazon Music, Deezer, and beyond. Plus, fans can use your songs across social apps including Instagram, TikTok, and Snapchat.",
    icon: Music,
  },
  {
    title: "Video distribution included",
    desc: "Broaden your audience by delivering music videos through our network. Get your visuals onto Vevo, Apple Music, YouTube, Tidal, and Boomplay effortlessly.",
    icon: Video,
  },
  {
    title: "Time-synced lyric display",
    desc: "Enhance the listening experience with synchronized lyrics that let fans follow along word by word and feel every beat of your song.",
    icon: Mic2,
  },
  {
    title: "You own everything you earn",
    desc: "We champion creative independence — you retain total control of your master recordings and are never locked into restrictive agreements or hidden fees.",
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
            Deliver your releases across the globe
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            Place your catalog on Spotify, Apple Music, Deezer, YouTube, Tidal, TikTok, and dozens more — while maintaining complete ownership and creative freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://WhatsApp.com" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold">
              Begin now <ArrowRight size={18} />
            </a>
            <a href="/pricing" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
              View plans
            </a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4">
        <div className="container">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2 text-center">The process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
            Three steps to going live
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            Launching your music on streaming platforms and earning from every play has never been more straightforward.
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
                <a href="https://WhatsApp.com" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                  Begin now <ArrowRight size={16} />
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
