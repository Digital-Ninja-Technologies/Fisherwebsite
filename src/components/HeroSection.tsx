import { ArrowRight } from "lucide-react";
import galaxyBg from "@/assets/galaxy-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={galaxyBg}
          alt="Galaxy background"
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
          Launch your sound to the world 🚀
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          Seamless music delivery and marketing solutions built for creators
        </p>
        <a
          href="#get-started"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
        >
          Begin Your Journey
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
