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
      name: "Starter Artist",
      desc: "Perfect for artists releasing their first few singles or projects.",
      price: "NGN 10,000",
      unit: "1 song",
      color: "text-green-400",
      benefits: [
        "Distribution to ALL stores (Spotify, Apple Music, Facebook, IG, Snap, TikTok etc.)",
        "Standard release timeline (10 working days)",
        "Basic Release Fanlink",
        "Lyrics sent to Apple Music (Not synced)",
        "Keep 100% royalties (after processing costs)",
        "Email and chat support (24-72 Hrs)",
        "Basic release scheduling (Release dates)",
      ],
    },
    {
      name: "Emerging Artist",
      desc: "Ideal for artists ready to scale, build fanbase, & start professional promotion.",
      price: "NGN 20,000",
      unit: "1 song",
      popular: true,
      color: "text-gold",
      benefits: [
        "Everything in Starter Artist plus:",
        "Faster distribution (5-7 working days)",
        "Pre-save link that auto-converts at release",
        "Access to Songstats dashboard for enhanced analytics",
        "Lyrics sent to Apple Music (Not synced)",
        "Keep 100% royalties (after processing costs)",
        "Release feedback (per release)",
        "Email and chat support (24-72 Hrs)",
      ],
    },
    {
      name: "Established Artist",
      desc: "Designed for pro artists, managers, & labels that need visibility & priority placement.",
      price: "NGN 40,000",
      unit: "1 song",
      color: "text-blue-400",
      benefits: [
        "Everything in Emerging Artist plus:",
        "Priority distribution (3-5 working days)",
        "Editorial pitching & DSP marketing submissions",
        "Lyrics synced to stores (released & upcoming songs)",
        "Sync licensing pitches (film, TV, brand placements)",
        "Access to Songstats dashboard for enhanced analytics",
        "Personalised release plan & exclusive perks",
        "Priority email and chat support (instant)",
        "Keep 100% royalties (after processing costs)",
      ],
    },
  ],
  EPs: [
    {
      name: "Starter Artist",
      desc: "Perfect for EP releases.",
      price: "NGN 25,000",
      unit: "2-6 songs",
      color: "text-green-400",
      benefits: [
        "Distribution to ALL stores",
        "Standard release timeline (10 working days)",
        "Basic Release Fanlink",
        "Keep 100% royalties (after processing costs)",
      ],
    },
    {
      name: "Emerging Artist",
      desc: "Scale your EP releases.",
      price: "NGN 45,000",
      unit: "2-6 songs",
      popular: true,
      color: "text-gold",
      benefits: [
        "Everything in Starter Artist plus:",
        "Faster distribution (5-7 working days)",
        "Pre-save link",
        "Songstats analytics access",
      ],
    },
    {
      name: "Established Artist",
      desc: "Full-service EP release.",
      price: "NGN 80,000",
      unit: "2-6 songs",
      color: "text-blue-400",
      benefits: [
        "Everything in Emerging Artist plus:",
        "Priority distribution (3-5 working days)",
        "Editorial pitching",
        "Sync licensing pitches",
      ],
    },
  ],
  Albums: [
    {
      name: "Starter Artist",
      desc: "Perfect for album releases.",
      price: "NGN 40,000",
      unit: "7-20 songs",
      color: "text-green-400",
      benefits: [
        "Distribution to ALL stores",
        "Standard release timeline (10 working days)",
        "Basic Release Fanlink",
        "Keep 100% royalties (after processing costs)",
      ],
    },
    {
      name: "Emerging Artist",
      desc: "Scale your album releases.",
      price: "NGN 70,000",
      unit: "7-20 songs",
      popular: true,
      color: "text-gold",
      benefits: [
        "Everything in Starter Artist plus:",
        "Faster distribution (5-7 working days)",
        "Pre-save link",
        "Songstats analytics access",
      ],
    },
    {
      name: "Established Artist",
      desc: "Full-service album release.",
      price: "NGN 120,000",
      unit: "7-20 songs",
      color: "text-blue-400",
      benefits: [
        "Everything in Emerging Artist plus:",
        "Priority distribution (3-5 working days)",
        "Editorial pitching",
        "Sync licensing pitches",
      ],
    },
  ],
  "Ext.": [
    {
      name: "Music Publishing Setup",
      desc: "Music Publishing Setup (per artist) + Regular Sync Offers",
      price: "NGN 200,000",
      unit: "per artist",
      color: "text-primary",
      benefits: [
        "Full publishing setup",
        "Regular sync offers",
        "Film, TV & brand placements",
      ],
    },
    {
      name: "Music Video Distribution",
      desc: "iTunes/Apple Music, Boomplay Video, Tidal & United Media Agency",
      price: "From NGN 20,000",
      unit: "per video",
      color: "text-gold",
      benefits: [
        "VEVO Channel Set Up + First Video: NGN 100,000",
        "VEVO Video Upload (existing channel): NGN 50,000",
        "All Video Platforms + VEVO Setup: NGN 120,000",
        "All Video Platforms + VEVO Upload: NGN 70,000",
      ],
    },
  ],
};

const promoCategories = [
  {
    title: "Music Video Promotion",
    items: [
      { name: "Soundcity Airplay: Regular Twice Daily", price: "NGN 700K" },
      { name: "Soundcity Airplay: 6X Daily for 5 Weeks", price: "NGN 1.3M" },
      { name: "MTV Base Airplay: 3X Weekly Play", price: "NGN 950K" },
      { name: "Trace TV: One-time Play", price: "NGN 900K" },
      { name: "Hip TV: One-time Play", price: "NGN 650K" },
      { name: "Pop Central: One-time Play", price: "NGN 500K" },
    ],
  },
  {
    title: "Editorial Playlists",
    items: [
      { name: "Apple Music Editorial (0-4 playlists)", price: "NGN 300K" },
      { name: "Spotify Editorial (0-2 playlists)", price: "NGN 250K" },
      { name: "Audiomack Trending", price: "NGN 200K" },
      { name: "Boomplay Editorial (4 Playlists)", price: "NGN 200K" },
      { name: "Tidal Editorial Playlists", price: "NGN 350K" },
      { name: "All Stores Combined", price: "NGN 1.3M" },
    ],
  },
  {
    title: "User Curated Playlists",
    items: [
      { name: "Spotify Playlist (per song per playlist)", price: "NGN 25,000" },
      { name: "Apple Music Playlist (per song per playlist)", price: "NGN 25,000" },
      { name: "Audiomack Playlist (per song per playlist)", price: "NGN 20,000" },
      { name: "Boomplay Playlist (per song per playlist)", price: "NGN 25,000" },
    ],
  },
  {
    title: "Exclusive Boomplay Promotions",
    items: [
      { name: "Bronze Package (2M Impressions)", price: "NGN 300K" },
      { name: "Silver Package (5M Impressions)", price: "NGN 650K" },
      { name: "Gold Package (10M Impressions)", price: "NGN 1.3M" },
      { name: "Diamond Package (15M Impressions)", price: "NGN 1.6M" },
    ],
  },
  {
    title: "Charts",
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
            Pricing—The Cost Of Stardom
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Elevate your music career with affordable pricing plans tailored for both independent artists and labels.
          </p>
          <a href="mailto:contactpromoboy@gmail.com" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold">
            Contact Sales <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Distribution Pricing */}
      <section className="py-20 px-4">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Music Distribution</h2>

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
                    Most Popular
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
          <h2 className="text-3xl font-bold text-foreground text-center mb-14">Promotion Pricing</h2>
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
