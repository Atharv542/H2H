import { ShieldCheck, Brain, Sparkles, Target } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";

export default function ConfidenceBuilding() {
  return (
    <ServiceTemplate
      badge="Self-Belief Session"
      title="Confidence Building"
      duration="60 Minutes"
      price="$149"
      stripeItemId="service11"
      gradient="from-blue-600 via-indigo-600 to-slate-700"
      description="This session helps you understand where confidence drops, why self-doubt appears, and how to build confidence through awareness, self-trust, and small aligned actions."
      features={[
        {
          icon: Brain,
          title: "Confidence awareness",
          description: "Understand where and why your confidence drops.",
        },
        {
          icon: ShieldCheck,
          title: "Self-trust",
          description: "Strengthen trust in your abilities and decisions.",
        },
        {
          icon: Sparkles,
          title: "Inner strengths",
          description: "Reconnect with strengths and past wins.",
        },
        {
          icon: Target,
          title: "Confident Action",
          description: "Take small, real-life confident steps.",
        },
      ]}
      // ✅ Is it for me?
      isItForMeItems={[
        {
          title: "Self-doubt",
          description: "You overthink your decisions and second-guess yourself often.",
        },
        {
          title: "Fear of judgment",
          description: "You hold back because you worry what others will think.",
        },
        {
          title: "Imposter feelings",
          description: "You feel like you’re not good enough despite your efforts.",
        },
        {
          title: "Low confidence",
          description: "Your confidence dips in interviews, social settings, or at work.",
        },
        {
          title: "Small steps",
          description: "You want practical steps to build confidence consistently.",
        },
      ]}
      included={[
        "Confidence awareness & self-assessment",
        "Identification of confidence triggers",
        "Limiting belief reframing",
        "Body & breath confidence techniques",
        "Strengths and self-trust exploration",
        "Personal confidence action plan",
      ]}
      outcomes={[
        "Increased self-belief",
        "Reduced fear of judgment",
        "Greater emotional stability",
        "Clear confidence goal",
        "Ability to act despite doubt",
        "Sustainable confidence habits",
      ]}
    />
  );
}
