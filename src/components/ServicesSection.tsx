import { Globe, Play, BarChart3, Headphones, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Release Delivery",
    description: "Push your tracks to digital storefronts around the world while keeping your rights and revenue intact.",
  },
  {
    icon: Play,
    title: "Playlist Campaigns",
    description: "Tap into curated and editorial playlists designed to put your sound in front of engaged listeners.",
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    description: "Monitor plays, revenue, and listener demographics through intuitive real-time dashboards.",
  },
  {
    icon: Headphones,
    title: "Always-On Assistance",
    description: "Our team is available around the clock to address questions and resolve issues promptly.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4" id="distribution">
      <div className="container">
        <p className="text-sm text-primary font-medium mb-3 text-center">Our offerings</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          A complete toolkit for independent musicians
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          We empower solo artists and record labels to unlock their full creative and commercial potential.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                Explore <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
