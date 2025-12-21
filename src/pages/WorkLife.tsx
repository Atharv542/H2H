import { Clock, Heart, Layers, Shield } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";
import { useNavigate } from "react-router-dom";

export default function WorkLifeBalance() {
  const navigate = useNavigate();

  return (
    <ServiceTemplate
      badge="Clarity & Alignment"
      title="Work–Life Balance"
      subtitle="Reset Priorities. Restore Balance. Live Intentionally."
      duration="60 Minutes"
       stripeItemId="service12"
      price="$149"
      gradient="from-purple-600 via-blue-600 to-slate-700"
      description="This session helps you identify imbalance, understand what’s draining you, and create practical boundaries and habits for sustainable balance without guilt."
      features={[
        {
          icon: Layers,
          title: "Life Balance Awareness",
          description: "See where imbalance exists across life areas."
        },
        {
          icon: Clock,
          title: "Time & Energy Audit",
          description: "Understand what drains and restores you."
        },
        {
          icon: Shield,
          title: "Healthy Boundaries",
          description: "Protect your time and energy."
        },
        {
          icon: Heart,
          title: "Values Alignment",
          description: "Reconnect with what truly matters."
        }
      ]}
      included={[
        "Work–life balance assessment",
        "Life area balance audit",
        "Energy drain vs restore mapping",
        "Boundary-setting reflection",
        "Values & priorities alignment",
        "Simple balance action plan"
      ]}
      outcomes={[
        "Clear awareness of imbalance",
        "Reduced stress and exhaustion",
        "Improved boundaries",
        "More intentional daily life",
        "Better energy management",
        "Sustainable work–life harmony"
      ]}

    />
  );
}
