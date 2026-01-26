import { Brain, Heart, Sparkles, Target } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";

export default function TransformYourLife() {
  return (
    <ServiceTemplate
      badge="60-Min Session"
      title="Transform Your Life"
      duration="60 Minutes"
      stripeItemId="service7"
      price="$149"
      gradient="from-blue-600 via-purple-600 to-slate-700"
      description="Slow down, reconnect with yourself, and gain clarity about your emotions, values, habits, and life direction."
      features={[
        { icon: Brain, title: "Inner awareness", description: "Understand what’s beneath the surface." },
        { icon: Heart, title: "Emotional clarity", description: "Reconnect with emotions safely." },
        { icon: Sparkles, title: "Mindful presence", description: "Ground yourself in the moment." },
        { icon: Target, title: "Life direction", description: "Define aligned next steps." },
      ]}
      // ✅ Is it for me?
      isItForMeItems={[
        {
          title: "Feeling disconnected",
          description: "You feel disconnected from yourself and want to reconnect inward.",
        },
        {
          title: "Emotions feel messy",
          description: "You want clarity around what you’re feeling and why it’s showing up.",
        },
        {
          title: "Need calm & grounding",
          description: "Your mind feels busy and you want a calmer, more grounded state.",
        },
        {
          title: "Seeking direction",
          description: "You’re unsure about your next step and want to have an aligned life direction to excel in your field.",
        },
        {
          title: "Ready for self-discovery",
          description: "You want a supportive space to explore values, habits, and purpose.",
        },
      ]}
      included={[
        "60-minute guided mindfulness session",
        "Values & inner truth exploration",
        "Emotional awareness reflection",
        "Life clarity vision exercise",
        "Personal action plan",
      ]}
      outcomes={[
        "Calm and grounded mind",
        "Emotional clarity",
        "Aligned life direction",
        "Stronger self-trust",
        "Clear next step",
      ]}
    />
  );
}
