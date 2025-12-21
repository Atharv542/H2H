import { Brain, Activity, Wind, Shield } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";
import { useNavigate } from "react-router-dom";

export default function StressManagement() {
  const navigate = useNavigate();

  return (
    <ServiceTemplate
      badge="Mindful Reset"
      title="Stress Awareness & Management"
      subtitle="Respond with Calm & Clarity"
      duration="60 Minutes"
      price="$149"
      gradient="from-blue-500 to-purple-600"
      description="Learn how stress shows up in your body and mind and how to manage it consciously."
      features={[
        { icon: Brain, title: "Stress Patterns", description: "Understand reactions." },
        { icon: Activity, title: "Body Awareness", description: "Where stress lives." },
        { icon: Wind, title: "Calming Tools", description: "Regulate stress fast." },
        { icon: Shield, title: "Boundaries", description: "Prevent overload." },
      ]}
      included={[
        "Stress awareness check-in",
        "Trigger identification",
        "Breathing techniques",
        "Energy reflection",
        "Stress-care plan",
      ]}
      outcomes={[
        "Reduced anxiety",
        "Improved focus",
        "Emotional balance",
        "Stress control tools",
        "Inner calm",
      ]}

    />
  );
}
