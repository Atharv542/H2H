import { Brain, Activity, Wind, Shield } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";

export default function StressManagement() {
  return (
    <ServiceTemplate
      badge="Mindful Reset"
      title="Stress Awareness & Management"
      duration="60 Minutes"
      price="$149"
      stripeItemId="service9"
      gradient="from-blue-500 to-purple-600"
      description="Learn how stress shows up in your body and mind and how to manage it consciously."
      features={[
        { icon: Brain, title: "Stress patterns", description: "Understand reactions." },
        { icon: Activity, title: "Body awareness", description: "Where stress lives." },
        { icon: Wind, title: "Calming tools", description: "Regulate stress fast." },
        { icon: Shield, title: "Boundaries", description: "Prevent overload." },
      ]}
      // ✅ Is it for me?
      isItForMeItems={[
        {
          title: "Anxiety and tension",
          description: "You feel tense, anxious, or mentally busy most days in your life.",
        },
        {
          title: "Stress in your body",
          description: "You notice headaches, tight chest, fatigue, or body tension.",
        },
        {
          title: "Easily overwhelmed",
          description: "Small things feel too much and you struggle to stay calm.",
        },
        {
          title: "Need calmness",
          description: "You want simple techniques to regulate stress in the moment.",
        },
        {
          title: "Want prevention",
          description: "You want boundaries and habits that stop stress from building up.",
        },
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
