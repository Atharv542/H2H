import { ShieldCheck, Brain, Sparkles, Target } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";
import { useNavigate } from "react-router-dom";

export default function ConfidenceBuilding() {
  const navigate = useNavigate();

  return (
    <ServiceTemplate
      badge="Self-Belief Session"
      title="Confidence Building"
      duration="60 Minutes"
      price="$149"
      gradient="from-blue-600 via-indigo-600 to-slate-700"
      description="This session helps you understand where confidence drops, why self-doubt appears, and how to build confidence through awareness, self-trust, and small aligned actions."
      features={[
        {
          icon: Brain,
          title: "Confidence Awareness",
          description: "Understand where and why your confidence drops."
        },
        {
          icon: ShieldCheck,
          title: "Self-Trust",
          description: "Strengthen trust in your abilities and decisions."
        },
        {
          icon: Sparkles,
          title: "Inner Strengths",
          description: "Reconnect with strengths and past wins."
        },
        {
          icon: Target,
          title: "Confident Action",
          description: "Take small, real-life confident steps."
        }
      ]}
      included={[
        "Confidence awareness & self-assessment",
        "Identification of confidence triggers",
        "Limiting belief reframing",
        "Body & breath confidence techniques",
        "Strengths and self-trust exploration",
        "Personal confidence action plan"
      ]}
      outcomes={[
        "Increased self-belief",
        "Reduced fear of judgment",
        "Greater emotional stability",
        "Clear confidence goal",
        "Ability to act despite doubt",
        "Sustainable confidence habits"
      ]}
    
    />
  );
}
