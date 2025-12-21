import { Brain, AlertTriangle, Zap, Target } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";
import { useNavigate } from "react-router-dom";

export default function Procrastination() {
  const navigate = useNavigate();

  return (
    <ServiceTemplate
      badge="Focus & Action"
      title="Overcoming Procrastination"
      subtitle="Understand the Pattern. Build Momentum."
      duration="60 Minutes"
      price="$99"
      gradient="from-blue-500 via-purple-600 to-slate-700"
      description="This session helps you understand why you procrastinate, identify emotional triggers, and create simple, realistic strategies to move from avoidance to action."
      features={[
        {
          icon: Brain,
          title: "Pattern Awareness",
          description: "Understand why procrastination happens."
        },
        {
          icon: AlertTriangle,
          title: "Emotional Triggers",
          description: "Recognise fear, overwhelm, and perfectionism."
        },
        {
          icon: Zap,
          title: "Momentum Tools",
          description: "Learn how to start even without motivation."
        },
        {
          icon: Target,
          title: "Focused Action",
          description: "Break tasks into achievable steps."
        }
      ]}
      included={[
        "Procrastination pattern analysis",
        "Emotional trigger identification",
        "Mindset reframing exercises",
        "Task breakdown strategies",
        "Distraction management tools",
        "Personal accountability plan"
      ]}
      outcomes={[
        "Reduced avoidance",
        "Improved focus",
        "Increased follow-through",
        "Less overwhelm",
        "Clear starting strategies",
        "Sustainable productivity"
      ]}

    />
  );
}
