import { Brain, AlertTriangle, Zap, Target } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";

export default function Procrastination() {
  return (
    <ServiceTemplate
      badge="Focus & Action"
      title="Overcoming Procrastination"
      duration="60 Minutes"
      price="$149"
      stripeItemId="service13"
      gradient="from-blue-500 via-purple-600 to-slate-700"
      description="This session helps you understand why you procrastinate, identify emotional triggers, and create simple, realistic strategies to move from avoidance to action."
      features={[
        {
          icon: Brain,
          title: "Pattern awareness",
          description: "Understand why procrastination happens.",
        },
        {
          icon: AlertTriangle,
          title: "Emotional triggers",
          description: "Recognise fear, overwhelm, and perfectionism.",
        },
        {
          icon: Zap,
          title: "Momentum tools",
          description: "Learn how to start even without motivation.",
        },
        {
          icon: Target,
          title: "Focused action",
          description: "Break tasks into achievable steps.",
        },
      ]}
      // ✅ Is it for me?
      isItForMeItems={[
        {
          title: "Delaying tasks",
          description: "You keep pushing things to later even when they’re important.",
        },
        {
          title: "Overwhelm kicks in",
          description: "Big tasks feel heavy, so you avoid starting altogether and delay them.",
        },
        {
          title: "Waiting",
          description: "You wait for the “perfect time” or “perfect plan” to begin.",
        },
        {
          title: "Easily distracted",
          description: "You lose focus quickly and struggle to stay consistent in your day-to-day tasks.",
        },
        {
          title: "Need momentum",
          description: "You want simple, realistic strategies that actually help you start.",
        },
      ]}
      included={[
        "Procrastination pattern analysis",
        "Emotional trigger identification",
        "Mindset reframing exercises",
        "Task breakdown strategies",
        "Distraction management tools",
        "Personal accountability plan",
      ]}
      outcomes={[
        "Reduced avoidance",
        "Improved focus",
        "Increased follow-through",
        "Less overwhelm",
        "Clear starting strategies",
        "Sustainable productivity",
      ]}
    />
  );
}
