import { Heart, Sparkles, Brain, ShieldCheck } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";
import { useNavigate } from "react-router-dom";

export default function BoostingSelfEsteem() {
  const navigate = useNavigate();

  return (
    <ServiceTemplate
      badge="Self-Worth Session"
      title="Boosting Self-Esteem"
      subtitle="Strengthen Self-Worth. Build a Healthier Inner Relationship."
      duration="60 Minutes"
      price="$149"
      stripeItemId="service14"
      gradient="from-pink-500 via-purple-600 to-slate-700"
      description="This session focuses on strengthening self-worth, reducing self-criticism, and building a compassionate, supportive relationship with yourself."
      features={[
        {
          icon: Heart,
          title: "Self-Worth Awareness",
          description: "Understand how you relate to yourself."
        },
        {
          icon: Brain,
          title: "Inner Dialogue Reset",
          description: "Reduce negative self-talk."
        },
        {
          icon: Sparkles,
          title: "Self-Acceptance",
          description: "Build kindness toward yourself."
        },
        {
          icon: ShieldCheck,
          title: "Emotional Resilience",
          description: "Strengthen emotional stability."
        }
      ]}
      included={[
        "Self-esteem assessment",
        "Negative self-talk awareness",
        "Self-compassion practices",
        "Belief and identity reframing",
        "Emotional grounding techniques",
        "Self-esteem action plan"
      ]}
      outcomes={[
        "Improved self-worth",
        "Reduced self-criticism",
        "Healthier emotional boundaries",
        "Greater emotional resilience",
        "Increased self-acceptance",
        "Stronger inner confidence"
      ]}

    />
  );
}
