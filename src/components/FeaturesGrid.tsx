import { Infinity, Link, Music2, DollarSign, ListMusic, User } from "lucide-react";
import galaxyBg from "@/assets/galaxy-bg.jpg";

const features = [
  { icon: Infinity, title: "Unlimited Distribution", desc: "Distribute as many releases as you desire on all digital music platforms." },
  { icon: Link, title: "Pre-Save Links", desc: "Before your song goes live, fans can Pre-Save it and share it with their friends." },
  { icon: Music2, title: "Lyrics Update", desc: "Get your song lyrics up so your fans can sing along while they listen." },
  { icon: DollarSign, title: "Royalties Report", desc: "Keep 100% of your earnings and get paid directly to your local bank account." },
  { icon: ListMusic, title: "Playlisting Services", desc: "Get your songs on some of the exposure it deserves and grow your fanbase." },
  { icon: User, title: "Artist Bio Links", desc: "Create an artist bio link and allow fans access all your music in one place." },
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={galaxyBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      </div>
      <div className="absolute inset-0 bg-background/80" />

      <div className="container relative z-10">
        <p className="text-sm text-primary font-medium mb-3 text-center">All our features</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          Release and promote your music with ease
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          We provide all the tools you need to release and promote your music seamlessly to your fans
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
