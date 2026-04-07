import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ArrowRight, ListMusic, TrendingUp, Tv, Radio, Share2, FileText, Music } from "lucide-react";
import galaxyBg from "@/assets/galaxy-bg.jpg";

const promoSteps = [
  { num: "1", title: "Make Good Music", desc: "Create great music and bring your artistic vision to life and connect with your audience through captivating melodies and lyrics" },
  { num: "2", title: "Promote It With Us", desc: "Our promotions ensure your tracks reach the right audience, helping you grow your fan base and gain the recognition you deserve" },
  { num: "3", title: "Enjoy The Growth", desc: "See your fan base expand with our promotional strategies. Watch your audience grow and engage with your music like never before" },
];

const services = [
  {
    title: "Editorial & User Curated Playlists",
    desc: "Enhance your visibility with our Editorial and User Curated Playlist promotion. Get your songs featured on popular playlists, increase your reach and connect with new audiences.",
    icon: ListMusic,
  },
  {
    title: "Top the Charts with Your Songs",
    desc: "Hit the top of the charts with your song! Get the exposure you need to climb the rankings and capture the spotlight on Apple Music's Top 100, Top 25, Top 10 and Audiomack's Top 100 and Top 50.",
    icon: TrendingUp,
  },
  {
    title: "Promote Your Music Videos",
    desc: "Maximise the impact of your music videos when you promote it on top television stations like Soundcity TV, MTV Base, Trace TV, Hip TV, Afro TV, Pop Central, Silverbird TV, Rave TV.",
    icon: Tv,
  },
  {
    title: "Top Boomplay Promotions",
    desc: "Get access to Exclusive Boomplay Promotions from Pop-Up, In-App Notifications to Top-tier Editorial Playlists and trending on the New Release and Featured Position categories.",
    icon: Music,
  },
  {
    title: "Get Played On Radio Stations",
    desc: "Get the exposure you need by getting your music on popular radio stations across the country and beyond.",
    icon: Radio,
  },
  {
    title: "Go Viral On TikTok",
    desc: "Do you have a sound or song that you want to get viral on TikTok? We can help you achieve that by getting macro, micro and major influencers to create videos using your sound.",
    icon: Share2,
  },
  {
    title: "Get Featured On Popular Blogs",
    desc: "Boost your visibility and reach a wider audience by getting featured on the most popular blogs. Elevate your music, share your story, and connect with readers who are eager to discover what's trending.",
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
            Promote your music to new heights 🚀
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            Grow your fanbase with our amazing promotional services which includes Playlisting Services, Radio and TV Airplays, TikTok Campaigns and more.
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
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2 text-center">What we offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Promotional Services</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            Boost your reach and grow your audience with our expert music promotional services.
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
                  See pricing <ArrowRight size={16} />
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
