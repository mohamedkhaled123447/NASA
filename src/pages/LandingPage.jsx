import IntroSection from "../components/landingPage/IntroSection";
import FeaturesSection from "../components/landingPage/FeaturesSection";
import VisualJourneySection from "../components/landingPage/VisualJourneySection";
import DiscoveriesSection from "../components/landingPage/DiscoveriesSection";
function LandingPage() {
  return (
    <div className="bg-white text-gray-900">
      <IntroSection />
      <FeaturesSection />
      <VisualJourneySection />
      <DiscoveriesSection />
    </div>
  );
}

export default LandingPage;
