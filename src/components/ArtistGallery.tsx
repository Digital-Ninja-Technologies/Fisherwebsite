const placeholders = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  color: `hsl(${260 + i * 15}, 60%, ${25 + i * 5}%)`,
}));

const ArtistGallery = () => {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="container mb-12">
        <p className="text-sm text-primary font-medium mb-3 text-center">Artist spotlight</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          Trusted by rising and established talent alike
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Creators across genres rely on our platform to reach new audiences. Join them and let your music travel further.
        </p>
      </div>

      {/* Scrolling gallery */}
      <div className="relative">
        <div className="flex animate-scroll-left" style={{ width: "fit-content" }}>
          {[...placeholders, ...placeholders].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 rounded-2xl mx-2 overflow-hidden"
              style={{ background: item.color }}
            >
              <div className="w-full h-full flex items-center justify-center text-foreground/20 text-4xl font-bold">
                ♪
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistGallery;
