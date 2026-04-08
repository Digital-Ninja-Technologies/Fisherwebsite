import { Infinity, Link, Music2, DollarSign, ListMusic, User } from "lucide-react";
import galaxyBg from "@/assets/galaxy-bg.jpg";

const features = [
  { icon: Infinity, title: "No Release Limits", desc: "Drop as many singles, EPs, and albums as you want across every streaming service." },
  { icon: Link, title: "Pre-Release Saves", desc: "Let fans bookmark your upcoming tracks ahead of launch day and spread the word early." },
  { icon: Music2, title: "Synced Lyrics", desc: "Display timed lyrics so listeners can follow along and connect deeper with your words." },
  { icon: DollarSign, title: "Earnings Dashboard", desc: "Track every penny you earn and withdraw funds straight to your bank whenever you choose." },
  { icon: ListMusic, title: "Playlist Placements", desc: "Get your tracks featured on high-traffic playlists to accelerate listener discovery." },
  { icon: User, title: "Artist Profile Pages", desc: "Build a single hub where fans can explore your full catalog and social channels." },
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={galaxyBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      </div>
      <div className="absolute inset-0 bg-background/80" />

      <div className="container relative z-10">
        <p className="text-sm text-primary font-medium mb-3 text-center">Platform capabilities</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          Everything you need to grow your career
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          From delivery to discovery, our platform handles the heavy lifting so you can focus on making music
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card rounded-2xl p-6 glow-purple">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
