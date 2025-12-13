import { Brain, Heart, Sparkles, Target } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";
import { useNavigate } from "react-router-dom";

export default function TransformYourLife() {
  const navigate = useNavigate();

  return (
    <ServiceTemplate
      badge="90-Min Session"
      title="Transform Your Life"
      subtitle="Mindfulness & Self-Discovery Session"
      duration="90 Minutes"
      price="$399"
      gradient="from-blue-600 via-purple-600 to-slate-700"
      description="Slow down, reconnect with yourself, and gain clarity about your emotions, values, habits, and life direction."
      features={[
        { icon: Brain, title: "Inner Awareness", description: "Understand what’s beneath the surface." },
        { icon: Heart, title: "Emotional Clarity", description: "Reconnect with emotions safely." },
        { icon: Sparkles, title: "Mindful Presence", description: "Ground yourself in the moment." },
        { icon: Target, title: "Life Direction", description: "Define aligned next steps." },
      ]}
      included={[
        "90-minute guided mindfulness session",
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
