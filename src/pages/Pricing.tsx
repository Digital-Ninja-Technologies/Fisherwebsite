import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import galaxyBg from "@/assets/galaxy-bg.jpg";

const distributionTabs = ["Single", "EPs", "Albums", "Ext."];

const distributionPlans = {
  Single: [
    {
      name: "Starter",
      desc: "Great for first-time releases or artists testing the waters.",
      price: "NGN 10,000",
      unit: "1 track",
      color: "text-green-400",
      benefits: [
        "Delivery to all major platforms (Spotify, Apple Music, TikTok, etc.)",
        "Standard processing window (10 business days)",
        "Simple fan link for your release",
        "Static lyrics submitted to Apple Music",
        "Retain 100% of streaming royalties",
        "Email & chat assistance (24–72 hr response)",
        "Flexible release date scheduling",
      ],
    },
    {
      name: "Growth",
      desc: "Built for artists who are ready to level up and build momentum.",
      price: "NGN 20,000",
      unit: "1 track",
      popular: true,
      color: "text-gold",
      benefits: [
        "All Starter perks included, plus:",
        "Expedited processing (5–7 business days)",
        "Auto-converting pre-release save link",
        "Advanced analytics via Songstats",
        "Static lyrics submitted to Apple Music",
        "Retain 100% of streaming royalties",
        "Professional release feedback",
        "Email & chat assistance (24–72 hr response)",
      ],
    },
    {
      name: "Professional",
      desc: "Tailored for seasoned artists, managers, and labels seeking maximum exposure.",
      price: "NGN 40,000",
      unit: "1 track",
      color: "text-blue-400",
      benefits: [
        "All Growth perks included, plus:",
        "Priority processing (3–5 business days)",
        "Editorial submissions & platform marketing",
        "Time-synced lyrics for current and future releases",
        "Sync licensing opportunities (film, TV, brands)",
        "Advanced analytics via Songstats",
        "Custom release strategy & VIP perks",
        "Instant priority support",
        "Retain 100% of streaming royalties",
      ],
    },
  ],
  EPs: [
    {
      name: "Starter",
      desc: "Ideal for compact EP releases.",
      price: "NGN 25,000",
      unit: "2–6 tracks",
      color: "text-green-400",
      benefits: [
        "Delivery to all major platforms",
        "Standard processing (10 business days)",
        "Simple fan link included",
        "Retain 100% of streaming royalties",
      ],
    },
    {
      name: "Growth",
      desc: "Take your EP rollout to the next level.",
      price: "NGN 45,000",
      unit: "2–6 tracks",
      popular: true,
      color: "text-gold",
      benefits: [
        "All Starter perks included, plus:",
        "Expedited processing (5–7 business days)",
        "Pre-release save link",
        "Songstats analytics dashboard",
      ],
    },
    {
      name: "Professional",
      desc: "Complete EP launch package.",
      price: "NGN 80,000",
      unit: "2–6 tracks",
      color: "text-blue-400",
      benefits: [
        "All Growth perks included, plus:",
        "Priority processing (3–5 business days)",
        "Editorial playlist submissions",
        "Sync licensing pitches",
      ],
    },
  ],
  Albums: [
    {
      name: "Starter",
      desc: "Straightforward album delivery.",
      price: "NGN 40,000",
      unit: "7–20 tracks",
      color: "text-green-400",
      benefits: [
        "Delivery to all major platforms",
        "Standard processing (10 business days)",
        "Simple fan link included",
        "Retain 100% of streaming royalties",
      ],
    },
    {
      name: "Growth",
      desc: "Elevate your album campaign.",
      price: "NGN 70,000",
      unit: "7–20 tracks",
      popular: true,
      color: "text-gold",
      benefits: [
        "All Starter perks included, plus:",
        "Expedited processing (5–7 business days)",
        "Pre-release save link",
        "Songstats analytics dashboard",
      ],
    },
    {
      name: "Professional",
      desc: "Premium album release experience.",
      price: "NGN 120,000",
      unit: "7–20 tracks",
      color: "text-blue-400",
      benefits: [
        "All Growth perks included, plus:",
        "Priority processing (3–5 business days)",
        "Editorial playlist submissions",
        "Sync licensing pitches",
      ],
    },
  ],
  "Ext.": [
    {
      name: "Publishing Setup",
      desc: "Full music publishing registration per artist with ongoing sync opportunities",
      price: "NGN 200,000",
      unit: "per artist",
      color: "text-primary",
      benefits: [
        "Complete publishing registration",
        "Recurring sync deal offers",
        "Film, television & brand placement pipeline",
      ],
    },
    {
      name: "Visual Distribution",
      desc: "iTunes/Apple Music, Boomplay Video, Tidal & United Media Agency",
      price: "From NGN 20,000",
      unit: "per video",
      color: "text-gold",
      benefits: [
        "VEVO channel creation + debut video: NGN 100,000",
        "VEVO upload (existing channel): NGN 50,000",
        "All video platforms + VEVO creation: NGN 120,000",
        "All video platforms + VEVO upload: NGN 70,000",
      ],
    },
  ],
};

const promoCategories = [
  {
    title: "Video Broadcast Promotion",
    items: [
      { name: "Soundcity: Standard rotation (2× daily)", price: "NGN 700K" },
      { name: "Soundcity: Heavy rotation (6× daily, 5 weeks)", price: "NGN 1.3M" },
      { name: "MTV Base: Weekly rotation (3× per week)", price: "NGN 950K" },
      { name: "Trace TV: Single broadcast", price: "NGN 900K" },
      { name: "Hip TV: Single broadcast", price: "NGN 650K" },
      { name: "Pop Central: Single broadcast", price: "NGN 500K" },
    ],
  },
  {
    title: "Editorial Playlist Submissions",
    items: [
      { name: "Apple Music editorial (up to 4 playlists)", price: "NGN 300K" },
      { name: "Spotify editorial (up to 2 playlists)", price: "NGN 250K" },
      { name: "Audiomack trending placement", price: "NGN 200K" },
      { name: "Boomplay editorial (4 playlists)", price: "NGN 200K" },
      { name: "Tidal editorial playlists", price: "NGN 350K" },
      { name: "Full platform bundle", price: "NGN 1.3M" },
    ],
  },
  {
    title: "Independent Curator Playlists",
    items: [
      { name: "Spotify placement (per track, per playlist)", price: "NGN 25,000" },
      { name: "Apple Music placement (per track, per playlist)", price: "NGN 25,000" },
      { name: "Audiomack placement (per track, per playlist)", price: "NGN 20,000" },
      { name: "Boomplay placement (per track, per playlist)", price: "NGN 25,000" },
    ],
  },
  {
    title: "Boomplay Feature Packages",
    items: [
      { name: "Bronze tier (2M impressions)", price: "NGN 300K" },
      { name: "Silver tier (5M impressions)", price: "NGN 650K" },
      { name: "Gold tier (10M impressions)", price: "NGN 1.3M" },
      { name: "Diamond tier (15M impressions)", price: "NGN 1.6M" },
    ],
  },
  {
    title: "Chart Campaigns",
    items: [
      { name: "Apple Music: Top 100 Nigeria 🇳🇬", price: "NGN 7.5M" },
      { name: "Apple Music: Top 100 Ghana 🇬🇭", price: "NGN 5M" },
      { name: "Apple Music: Top 25 Ghana 🇬🇭", price: "NGN 6M" },
      { name: "Apple Music: Top 10 Lagos", price: "NGN 10M" },
      { name: "Audiomack: Top 100 Nigeria 🇳🇬", price: "NGN 2.8M" },
    ],
  },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("Single");

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
            Transparent plans for every stage
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're dropping your debut single or managing a full roster, we have a plan that fits your goals and budget.
          </p>
          <a href="mailto:contactpromoboy@gmail.com" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold">
            Talk to our team <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Distribution Pricing */}
      <section className="py-20 px-4">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Release Delivery Plans</h2>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {distributionTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {(distributionPlans[activeTab as keyof typeof distributionPlans] || []).map((plan) => (
              <div key={plan.name} className={`glass-card rounded-2xl p-8 relative ${"popular" in plan && plan.popular ? "ring-2 ring-primary" : ""}`}>
                {"popular" in plan && plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    Recommended
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
                <p className={`text-3xl font-bold ${plan.color} mb-1`}>{plan.price}</p>
                <p className="text-xs text-muted-foreground mb-6">{plan.unit}</p>
                <ul className="space-y-3">
                  {plan.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={16} className={`mt-0.5 shrink-0 ${plan.color}`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Pricing */}
      <section className="py-20 px-4">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-14">Marketing & Promotion Rates</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {promoCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {cat.title}
                </h3>
                <div className="glass-card rounded-2xl overflow-hidden">
                  {cat.items.map((item, i) => (
                    <div key={item.name} className={`flex items-center justify-between px-6 py-4 ${i !== cat.items.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="text-sm text-muted-foreground">{item.name}</span>
                      <span className="text-sm font-semibold text-foreground whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
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

export default Pricing;
