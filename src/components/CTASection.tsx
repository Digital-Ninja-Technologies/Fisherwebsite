import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4" id="get-started">
      <div className="container">
        <div className="glass-card rounded-3xl p-10 md:p-16 text-center glow-purple">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Ready to amplify your reach?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Place your tracks on every major streaming service across the globe. Retain full ownership of your catalog and earnings while unlocking playlist opportunities to expand your listener base.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Start now
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
