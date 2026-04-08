const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-background font-bold text-sm">F</div>
              <span className="text-foreground font-bold">FisherPromo</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Seamless music delivery and marketing solutions built for creators
            </p>
            <a
              href="#"
              className="inline-flex items-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"
            >
              Begin Now
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Release Delivery</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Marketing Campaigns</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Lyric Sync</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pre-Release Saves</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Reach Out</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">©2026 The Promo Boy.</p>
          <div className="flex gap-4">
            {["Facebook", "Twitter", "Instagram", "WhatsApp"].map((s) => (
              <a key={s} href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors text-xs font-medium">
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
