import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import ServicesSection from "@/components/ServicesSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import ArtistGallery from "@/components/ArtistGallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <ServicesSection />
      <FeaturesGrid />
      <ArtistGallery />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
