import { BatteryCharging, Heart, Shield, Sparkles } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";
import { useNavigate } from "react-router-dom";

export default function BurnoutRecovery() {
  const navigate = useNavigate();

  return (
    <ServiceTemplate
      badge="Mindful Reset"
      title="Burnout Recovery"
     
      duration="60 Minutes"
      price="$149"
      gradient="from-purple-600 to-slate-700"
      description="A compassionate session to understand burnout and begin recovery without pressure."
      features={[
        { icon: BatteryCharging, title: "Energy Recovery", description: "Restore depleted energy." },
        { icon: Shield, title: "Boundaries", description: "Protect your wellbeing." },
        { icon: Heart, title: "Self-Compassion", description: "Release self-criticism." },
        { icon: Sparkles, title: "Mindful Reset", description: "Calm your nervous system." },
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
