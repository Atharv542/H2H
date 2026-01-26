import { Heart, Sparkles, Brain, ShieldCheck } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";

export default function BoostingSelfEsteem() {
  return (
    <ServiceTemplate
      badge="Self-Worth Session"
      title="Boosting Self-Esteem"
      duration="60 Minutes"
      price="$149"
      stripeItemId="service14"
      gradient="from-pink-500 via-purple-600 to-slate-700"
      description="This session focuses on strengthening self-worth, reducing self-criticism, and building a compassionate, supportive relationship with yourself."
      features={[
        {
          icon: Heart,
          title: "Self-worth awareness",
          description: "Understand how you relate to yourself.",
        },
        {
          icon: Brain,
          title: "Inner dialogue reset",
          description: "Reduce negative self-talk.",
        },
        {
          icon: Sparkles,
          title: "Self-acceptance",
          description: "Build kindness toward yourself.",
        },
        {
          icon: ShieldCheck,
          title: "Emotional resilience",
          description: "Strengthen emotional stability.",
        },
      ]}
      // ✅ Is it for me?
      isItForMeItems={[
        {
          title: "Harsh self-criticism",
          description: "Your inner voice is tough on you and it affects your confidence.",
        },
        {
          title: "Comparing yourself",
          description: "You often compare yourself to others and feel “less than.”",
        },
        {
          title: "People-pleasing",
          description: "You struggle to say no and depend on approval to feel okay.",
        },
        {
          title: "Low self-worth",
          description: "Deep down, you don’t fully feel good enough or deserving.",
        },
        {
          title: "Self-compassion",
          description: "You want to build a kinder, healthier relationship with yourself.",
        },
      ]}
      included={[
        "Self-esteem assessment",
        "Negative self-talk awareness",
        "Self-compassion practices",
        "Belief and identity reframing",
        "Emotional grounding techniques",
        "Self-esteem action plan",
      ]}
      outcomes={[
        "Improved self-worth",
        "Reduced self-criticism",
        "Healthier emotional boundaries",
        "Greater emotional resilience",
        "Increased self-acceptance",
        "Stronger inner confidence",
      ]}
    />
  );
}
