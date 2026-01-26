import { Clock, Heart, Layers, Shield } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";

export default function WorkLifeBalance() {
  return (
    <ServiceTemplate
      badge="Clarity & Alignment"
      title="Work–Life Balance"
      duration="60 Minutes"
      stripeItemId="service12"
      price="$149"
      gradient="from-purple-600 via-blue-600 to-slate-700"
      description="This session helps you identify imbalance, understand what’s draining you, and create practical boundaries and habits for sustainable balance without guilt."
      features={[
        {
          icon: Layers,
          title: "Life balance awareness",
          description: "See where imbalance exists across life areas.",
        },
        {
          icon: Clock,
          title: "Time & energy audit",
          description: "Understand what drains and restores you.",
        },
        {
          icon: Shield,
          title: "Healthy boundaries",
          description: "Protect your time and energy.",
        },
        {
          icon: Heart,
          title: "Values alignment",
          description: "Reconnect with what truly matters.",
        },
      ]}
      // ✅ Is it for me?
      isItForMeItems={[
        {
          title: "Always “on”",
          description: "Work follows you everywhere and switching off feels hard.",
        },
        {
          title: "Drained after work",
          description: "You’re left with little energy for yourself, family, or friends.",
        },
        {
          title: "Guilt when resting",
          description: "You feel guilty taking breaks or saying no to extra tasks.",
        },
        {
          title: "Weak boundaries",
          description: "Your time gets taken up by others and you struggle to protect it.",
        },
        {
          title: "Want balance",
          description: "You want practical habits and boundaries for sustainable balance.",
        },
      ]}
      included={[
        "Work–life balance assessment",
        "Life area balance audit",
        "Energy drain vs restore mapping",
        "Boundary-setting reflection",
        "Values & priorities alignment",
        "Simple balance action plan",
      ]}
      outcomes={[
        "Clear awareness of imbalance",
        "Reduced stress and exhaustion",
        "Improved boundaries",
        "More intentional daily life",
        "Better energy management",
        "Sustainable work–life harmony",
      ]}
    />
  );
}
