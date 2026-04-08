import moneyBag from "@/assets/money-bag.png";
import phonesMockup from "@/assets/phones-mockup.png";
import { Music } from "lucide-react";

const FeatureCards = () => {
  return (
    <section className="py-20 px-4">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Monetize */}
        <div className="glass-card rounded-2xl p-8 flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-2">Earn from every stream</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Collect all royalties yourself and hold on to complete ownership of your recordings.
          </p>
          <div className="mt-auto flex justify-center">
            <img src={moneyBag} alt="Monetize" loading="lazy" width={200} height={200} className="w-48" />
          </div>
        </div>

        {/* Distribution */}
        <div className="glass-card rounded-2xl p-8 flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-2">Global streaming delivery</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Place your releases across every leading platform so listeners everywhere can find you.
          </p>
          <div className="mt-auto grid grid-cols-4 gap-3">
            {["Spotify", "Apple Music", "Amazon", "Tidal", "YouTube", "Deezer", "TikTok", "SoundCloud"].map((name) => (
              <div key={name} className="bg-secondary rounded-xl p-3 flex items-center justify-center">
                <Music size={20} className="text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>

        {/* Promotions */}
        <div className="glass-card rounded-2xl p-8 flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-2">Strategic music marketing</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Land placements on editorial and independent playlists that drive real engagement.
          </p>
          <div className="mt-auto flex justify-center">
            <img src={phonesMockup} alt="Promotions" loading="lazy" width={300} height={240} className="w-64" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
