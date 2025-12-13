import { Lightbulb, Brain, Sparkles, Target } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";
import { useNavigate } from "react-router-dom";

export default function LimitingBeliefs() {
  const navigate = useNavigate();

  return (
    <ServiceTemplate
      badge="Mindset Reset"
      title="Releasing Limiting Beliefs"
      subtitle="Rewrite Your Inner Story"
      duration="90 Minutes"
      price="$599"
      gradient="from-purple-600 to-indigo-700"
      description="Identify and release beliefs holding you back and replace them with empowering ones."
      features={[
        { icon: Lightbulb, title: "Belief Awareness", description: "Identify core stories." },
        { icon: Brain, title: "Reframing", description: "Challenge old patterns." },
        { icon: Sparkles, title: "Emotional Release", description: "Let go safely." },
        { icon: Target, title: "Integration", description: "Anchor new beliefs." },
      ]}
      included={[
        "Belief identification",
        "Reframing exercises",
        "Emotional reset",
        "Letting-go ritual",
        "New belief integration",
      ]}
      outcomes={[
        "Increased confidence",
        "Mental clarity",
        "Emotional freedom",
        "Self-trust",
        "Aligned mindset",
      ]}

    />
  );
}
