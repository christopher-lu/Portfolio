import Biography from "./Biography";
import CareerHighlights from "./CareerHighlight";
import PersonalMission from "./PersonalMission";
import TechStack from "./TechStack";

export default function AboutContent() {
  return (
    <div className="space-y-20">
      <Biography />

      <CareerHighlights />

      <TechStack />

      <PersonalMission />
    </div>
  );
}