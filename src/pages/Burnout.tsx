import { BatteryCharging, Heart, Shield, Sparkles } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";

export default function BurnoutRecovery() {
  return (
    <ServiceTemplate
      badge="Mindful reset"
      title="Burnout Recovery"
      stripeItemId="service8"
      duration="60 Minutes"
      price="$149"
      gradient="from-purple-600 to-slate-700"
      description="A compassionate session to understand burnout and begin recovery without pressure."
      features={[
        { icon: BatteryCharging, title: "Energy recovery", description: "Restore depleted energy." },
        { icon: Shield, title: "Boundaries", description: "Protect your wellbeing." },
        { icon: Heart, title: "Self-compassion", description: "Release self-criticism." },
        { icon: Sparkles, title: "Mindful reset", description: "Calm your nervous system." },
      ]}
      // ✅ NEW: Is it for me?
      isItForMeItems={[
        {
          title: "Constantly tired",
          description: "You feel exhausted even after rest and your energy feels depleted.",
        },
        {
          title: "Overwhelmed",
          description: "Small tasks feel heavy and your mind feels overloaded most days.",
        },
        {
          title: "People-pleasing",
          description: "You struggle to say no and your boundaries keep getting crossed.",
        },
        {
          title: "Emotionally drained",
          description: "You feel numb, irritable, or tearful and can’t explain why.",
        },
        {
          title: "Need a reset",
          description: "You want a calm, supportive plan to recover without pressure.",
        },
      ]}
      included={[
        "Burnout awareness check-in",
        "Energy audit",
        "Boundary reset",
        "Mindfulness practices",
        "Recovery action plan",
      ]}
      outcomes={[
        "Reduced exhaustion",
        "Clarity on burnout causes",
        "Stronger boundaries",
        "Emotional relief",
        "Hope and direction",
      ]}
    />
  );
}
