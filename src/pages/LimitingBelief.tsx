import { Lightbulb, Brain, Sparkles, Target } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";

export default function LimitingBeliefs() {
  return (
    <ServiceTemplate
      badge="Mindset Reset"
      title="Releasing Limiting Beliefs"
      duration="60 Minutes"
      price="$149"
      stripeItemId="service10"
      gradient="from-purple-600 to-indigo-700"
      description="Identify and release beliefs holding you back and replace them with empowering ones."
      features={[
        { icon: Lightbulb, title: "Belief awareness", description: "Identify core stories." },
        { icon: Brain, title: "Reframing", description: "Challenge old patterns." },
        { icon: Sparkles, title: "Emotional release", description: "Let go safely." },
        { icon: Target, title: "Integration", description: "Anchor new beliefs." },
      ]}
      // ✅ Is it for me?
      isItForMeItems={[
        {
          title: "Same pattern",
          description: "You keep repeating the same cycle even when you want to change.",
        },
        {
          title: "Inner critic is loud",
          description: "Your self-talk is harsh and it blocks your confidence and growth.",
        },
        {
          title: "Fear of failure",
          description: "You avoid opportunities because failing feels too risky or painful.",
        },
        {
          title: "Feeling not good",
          description: "You doubt your worth, skills, or ability to succeed consistently.",
        },
        {
          title: "Ready for new start",
          description: "You want a practical way to replace old beliefs with empowering ones.",
        },
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
